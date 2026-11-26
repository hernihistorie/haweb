import type { Plugin } from "vite";

const QUERY = "&placeholder";
const PLACEHOLDER_DIRECTIVES = "?w=20&format=webp&quality=50&inline";

/**
 * Lets enhanced images be imported with `&enhanced&placeholder` to get a tiny inlined version of
 * the image along with the picture, for `placeholderStyle()` to show while the image loads.
 * Not for transparent images, as the placeholder would show through them.
 */
export function imagePlaceholder(): Plugin {
    return {
        name: "image-placeholder",
        // Before imagetools, which would otherwise ignore the placeholder
        enforce: "pre",
        load(id) {
            if (!id.endsWith("&enhanced" + QUERY)) return;
            const file = id.slice(0, id.indexOf("?"));
            const picture = id.slice(0, -QUERY.length);

            return [
                `import picture from ${JSON.stringify(picture)};`,
                `import placeholder from ${JSON.stringify(file + PLACEHOLDER_DIRECTIVES)};`,
                `export default { ...picture, placeholder };`,
            ].join("\n");
        },
    };
}
