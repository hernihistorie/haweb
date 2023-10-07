type Gender = 'M' | 'F';

interface Photo {
    url: string;
    details_url: string;
    license_text: string;
}

interface InterviewData {
    slug: string;
    lang: string;
    title: string;
    audio_file: string;
    audio_duration: number;
    narrator: {
        name: string;
        birth_year: string;
        gender: Gender;
        photo: Photo | undefined;
    };
    interview: {
        date: Date;
        place: string;
        interviewer: string;
        length: string;
        project: string;
        informed_agreement: boolean;
        transcriber: string;
        verifier: null;
    };
    tags: never[];
}
