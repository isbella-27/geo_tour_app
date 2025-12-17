export type Destination = {
    id: number;
    title: string;
    region: string;
    description: string;
    bestPeriod: string;
    pointsOfInterest: string[];
    image?: string | null;
    created_at: string;
    updated_at: string;
};