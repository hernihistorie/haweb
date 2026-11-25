declare module "*&imagetools" {
    const src: string;
    export default src;
}

declare module "*&enhanced" {
    import type { Picture } from "vite-imagetools";

    const picture: Picture;
    export default picture;
}
