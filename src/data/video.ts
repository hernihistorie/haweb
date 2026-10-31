export interface Video {
    /** Unset when the recording is missing, e.g. a talk with only its slides */
    youtubeId?: string;
    /** The YouTube channel the video was published on */
    channel?: { name: string; url: string };
}
