import slugify from 'slugify'

import type { InterviewChapters, Chapters } from "./types";

export function slugify_chapters(chapters: InterviewChapters): Chapters {
    return Object.fromEntries(
        chapters.map(chapter => [chapter, {name: chapter, slug: slugify(chapter)}])
    )
}