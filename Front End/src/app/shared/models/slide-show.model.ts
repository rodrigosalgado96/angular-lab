export class slideShow {
    constructor(
        public link: string,
        public alt?: string,
    ){}
}

export class slideShowWithId {
    constructor(
        public id: number,
        public link: string,
        public alt?: string,
    ){}
}