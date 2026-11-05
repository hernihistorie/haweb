import type { Event } from "./events/event";
import type { VideoPost } from "$src/types";

export interface Video {
    /** Unset when the recording is missing, e.g. a talk with only its slides */
    youtubeId?: string;
    /** The YouTube channel the video was published on */
    channel?: { name: string; url: string };
    /** Length in seconds */
    duration?: number;
}

/** A recorded stream, published as a playlist of its parts */
export interface Stream {
    event: Event;
    /** Video posts in playlist order. They're only listed through their stream. */
    parts: VideoPost[];
}
