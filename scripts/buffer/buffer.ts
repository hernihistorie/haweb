const BUFFER_API = 'https://api.buffer.com';

// ── Types ──────────────────────────────────────────────────────────────────

export interface Organization {
    id: string;
    name: string;
}

export interface Channel {
    id: string;
    name: string;
    service: string;
}

export interface BufferPost {
    id: string;
    text: string;
    status: string;
    dueAt: string | null;
    assets: { source: string; thumbnail: string; mimeType: string }[];
}

// ── GraphQL helper ─────────────────────────────────────────────────────────

async function gql<T>(token: string, query: string, variables?: Record<string, unknown>): Promise<T> {
    const body = JSON.stringify({ query, variables });
    const res = await fetch(BUFFER_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body,
    });
    const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
    if (!res.ok) {
        throw new Error(`Buffer API error: ${res.status} ${res.statusText}\n${JSON.stringify(json, null, 2)}`);
    }
    if (json.errors?.length) {
        throw new Error(`GraphQL errors: ${json.errors.map((e) => e.message).join(', ')}`);
    }
    return json.data!;
}

// ── API calls ──────────────────────────────────────────────────────────────

export async function getOrganizations(token: string): Promise<Organization[]> {
    const data = await gql<{ account: { organizations: Organization[] } }>(
        token,
        `query { account { organizations { id name } } }`
    );
    return data.account.organizations;
}

export async function getChannels(token: string, orgId: string): Promise<Channel[]> {
    const data = await gql<{ channels: Channel[] }>(
        token,
        `query GetChannels($input: ChannelsInput!) {
            channels(input: $input) { id name service }
        }`,
        { input: { organizationId: orgId } }
    );
    return data.channels;
}

export async function getPosts(
    token: string,
    orgId: string,
    channelId: string,
    statuses: string[],
    numPosts: number
): Promise<BufferPost[]> {
    const data = await gql<{
        posts: { edges: { node: BufferPost }[] };
    }>(
        token,
        `query GetPosts($input: PostsInput!, $first: Int) {
            posts(input: $input, first: $first) {
                edges {
                    node {
                        id
                        text
                        status
                        dueAt
                        assets { source thumbnail mimeType }
                    }
                }
            }
        }`,
        {
            input: {
                organizationId: orgId,
                filter: {
                    channelIds: [channelId],
                    status: statuses,
                },
            },
            first: numPosts,
        }
    );
    return data.posts.edges.map((e) => e.node);
}
