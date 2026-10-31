// Text of each page of a PDF, see src/lib/vite/slideText.ts
declare module "*.pdf?text" {
    const pages: string[];
    export default pages;
}
