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
    birth_year?: string;
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
        date: Date;
        place: string;
        interviewer?: Person;
        interviewers?: Person[];
        length?: string;
        project?: string;
        informed_agreement: boolean;
        transcriber?: Person;
        redaction?: Person;
        verifier?: Person;
    };
    complete: boolean;
    tags: string[] | undefined;
}

export interface AssetData {
    name: string;
    picture: Photo;
    description: string;
    inventory_url: string;
}