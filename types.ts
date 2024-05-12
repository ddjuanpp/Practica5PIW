export type Peli = {
    _id: string,
    brand: string,
    name: string,
    iso: number,
    formatThirtyFive: boolean,
    formatOneTwenty: boolean,
    color: boolean,
    process: string,
    staticImageUrl: string,
    description: string,
    customDescription: string[],
    keyFeatures: Key[],
    dateAdded: string,
    __v: number,
};

export type Key = {
    _id: string,
    feature: string,
};

export type Filters = {
    brands: string[],
    isos: string[],
};