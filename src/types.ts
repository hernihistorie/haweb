interface InterviewData {
    lang: string;
    title: string;
    audio_file: string;
    audio_duration: number;
    narrator: {
        name: string;
        birth_year: string;
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
