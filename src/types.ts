import { Temporal } from '@js-temporal/polyfill';

export type LanguageCode = 'cs' | 'sk' | 'en';

export type LocalizedString = string | {
    [K in LanguageCode]?: string;
} & ({ cs: string } | { en: string })

type Gender = 'M' | 'F';

export interface Photo {
    url: string;
    details_url?: string;
    license_text?: string;
}

export interface Person {
    name: string;
    shortname?: string;
    color?: string;
    photo?: Photo;
    bio?: LocalizedString;
    bio_short?: LocalizedString;
    birth_year?: string;
    birth_place?: string;
    gender?: Gender;
}

export interface Language {
    code: LanguageCode;
    name: LocalizedString;
}

export interface InterviewData {
    slug: string;
    lang: string;
    title: LocalizedString;
    audio_file?: string;
    audio_duration?: number;
    narrator: Person;
    interview: {
        type?: "interview" | "questionnaire";
        date: Date;
        publication_date?: Date;
        english_translation_publication_date?: Date;
        place?: LocalizedString;
        interviewer?: Person;
        interviewers?: Person[];
        length?: string;
        languages?: Language[];
        project?: Project;
        informed_agreement?: boolean;
        transcriber?: Person;
        redaction?: Person;
        verifier?: Person;
    };
    complete: boolean;
    tags: string[] | undefined;
}

export interface AssetData {
    id?: string;
    name: string;
    picture: Photo;
    primary_dump_path?: string;
    primary_dump_size?: number;
    primary_document_path?: string;
    description: string | null;
    inventory_url: string;
}

export interface Project {
    name: LocalizedString;
    fullname?: LocalizedString;
    type?: "project" | "fond";
    url?: string;
    image?: string;
    description?: LocalizedString;
}

export interface BlogPost {
    id: number;
    slug: string;
    image?: string;
    title: LocalizedString;
    date?: Temporal.PlainDate;
    english_translation_date?: Temporal.PlainDate;
    author_name?: string;
    description_html?: LocalizedString;
}