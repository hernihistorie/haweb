interface InterviewData {
    lang: string;
    title: string;
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
