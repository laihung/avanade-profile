export class Card {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
}

export class Data {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}