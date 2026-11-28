/** A file size for people, e.g. "3.8 MiB" */
export function formatFileSize(bytes?: number | null): string {
    if (!bytes) return "unknown size";
    const units = ["B", "KiB", "MiB", "GiB"];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(1)} ${units[i]}`;
}
