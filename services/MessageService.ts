import { MessageDao } from "../dao/MessageDao.js";

class MessageService {
    
    messageDao : MessageDao

    constructor() {
        this.messageDao = new MessageDao();
    }

    async add(m : Message) {
        return await this.messageDao.add(m)
    }

    async getMessageById(id : number) {
        return await this.messageDao.find(id)
    }

    async getMessageDateById(id: number) {
        const message = await this.messageDao.find(id)
        // example of logic in the Service side
        const date = new Date(message.timestamp)
        return date
    }

    async getMessages() {
        return await this.messageDao.getAllMessages()
    }

    async getAuthorIdByMessageId(id: any) {
        const authorId = await this.messageDao.getAuthorIdByMessageId(id)
        return authorId
    }

}

export {MessageService}