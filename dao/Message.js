"use strict";
class Message {
    constructor(authorId = 1, id, body, timestamp, likes) {
        this.authorId = authorId;
        this.id = id;
        this.body = body;
        this.timestamp = timestamp;
        this.likes = likes;
    }
}
