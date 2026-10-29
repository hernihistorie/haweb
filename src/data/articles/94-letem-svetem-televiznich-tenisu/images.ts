import { articleImages } from "$src/lib/articleImages";

export const img = articleImages(
    import.meta.glob("./img/*", {
        eager: true,
        query: "?w=1600;800&enhanced",
        import: "default",
    }),
    import.meta.glob("./img/*", { eager: true, import: "default" }),
    import.meta.glob("./img/*", {
        eager: true,
        query: "?as=meta:width;height",
        import: "default",
    }),
);
