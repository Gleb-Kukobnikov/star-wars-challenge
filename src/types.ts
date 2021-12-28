export interface Film {
    title: string;
    episodeID: number;
    openingCrawl: string;
}

export interface FilmConnection {
    films: Film[];
}

export interface Hero {
    id: string;
    name: string;
    gender: 'male' | 'female' | 'hermaphrodite' | 'n/a'
    height: number;
    birthYear: string;
    filmConnection: FilmConnection;
}

export interface BreadcrumbLink {
    label: string;
    path: string;
}

export interface CrawlModalState {
    film?: Film;
    open: boolean;
}
