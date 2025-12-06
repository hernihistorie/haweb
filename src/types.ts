export type LanguageCode = 'cs' | 'en';

export type LocalizedString = string | {
    [K in LanguageCode]: string;
}

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
    bio?: string;
    bio_short?: string;
    birth_year?: string;
    birth_place?: string;
    gender?: Gender;
}

export interface InterviewData {
    slug: string;
    lang: string;
    title: string;
    audio_file?: string;
    audio_duration?: number;
    narrator: Person;
    interview: {
        type?: "interview" | "questionnaire";
        date: Date;
        publication_date?: Date;
        place?: string;
        interviewer?: Person;
        interviewers?: Person[];
        length?: string;
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
    description: string;
    inventory_url: string;
}

export interface Project {
    name: LocalizedString;
    type: "project" | "fond";
    url?: string;
    image: string;
    description: LocalizedString;
}