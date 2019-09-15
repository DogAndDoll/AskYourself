export interface Question {
    id: number;
    title: string;
    description: string;
    date: Date;
    imageUrl: string;
    upVotes: number;
    downVotes: number;
}
