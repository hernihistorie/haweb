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
        project?: {
            name: string;
            url?: string;
        };
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
    description: string;
    inventory_url: string;
}