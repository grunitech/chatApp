import { MessageDao } from "../dao/MessageDao.js";
class MessageService {
    constructor() {
        this.messageDao = new MessageDao();
    }
    async add(m) {
        return await this.messageDao.add(m);
    }
    async getMessageById(id) {
        return await this.messageDao.find(id);
    }
    async getMessageDateById(id) {
        const message = await this.messageDao.find(id);
        // example of logic in the Service side
        const date = new Date(message.timestamp);
        return date;
    }
    async getMessages() {
        return await this.messageDao.getAllMessages();
    }
    async getAuthorIdByMessageId(id) {
        const authorId = await this.messageDao.getAuthorIdByMessageId(id);
        return authorId;
    }
}
export { MessageService };
