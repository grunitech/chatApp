
class Message {
    authorId:number;
    id:number;
    body:string;
    timestamp:number;
    likes:number[];

    constructor(authorId: number = 1, id: number, body: string, timestamp: number, likes:number[]) {
        this.authorId = authorId
        this.id=id;
        this.body = body;
        this.timestamp = timestamp
        this.likes = likes

    }
}