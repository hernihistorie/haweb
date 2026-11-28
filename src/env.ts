import { defineEnvVars } from "@sveltejs/kit/env";

/** Unset or empty is undefined */
const optional = (value: string | undefined): string | undefined => value || undefined;

export const variables = defineEnvVars({
    CORUSCANT_X_ACCEL_REDIRECT: {
        description:
            "Prefix of the nginx location serving haweb's files on coruscant, e.g. `/_coruscant/` " +
            "(see src/lib/server/coruscant.ts). Set in production.",
        schema: optional,
    },
    CORUSCANT_DIR: {
        description:
            "Local directory laid out like haweb's home on coruscant, to send its files from " +
            "without nginx, e.g. in development (see src/lib/server/coruscant.ts).",
        schema: optional,
    },
});
