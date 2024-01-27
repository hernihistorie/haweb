type Gender = 'M' | 'F';

export interface Photo {
    url: string;
    details_url?: string;
    license_text?: string;
}

export interface InterviewData {
    slug: string;
    lang: string;
    title: string;
    audio_file?: string;
    audio_duration?: number;
    narrator: {
        name: string;
        birth_year: string;
        gender: Gender;
        photo?: Photo;
        bio?: string;
    };
    interview: {
        date: Date;
        place: string;
        narrator_abbrev?: string;
        interviewer: string;
        interviewer_abbrev?: string;
        length?: string;
        project?: string;
        informed_agreement: boolean;
        transcriber?: string;
        redaction?: string;
        verifier?: string;
    };
    complete: boolean;
    tags: string[] | undefined;
}