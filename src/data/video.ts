export interface Video {
    youtubeId: string;
    /** The YouTube channel the video was published on */
    channel?: { name: string; url: string };
}
