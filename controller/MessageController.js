import { MessageService } from "../services/MessageService.js";
class MessageController {
    constructor() {
        this.messageService = new MessageService();
    }
    async add(req, res) {
        try {
            const isAdded = await this.messageService.add(req.body.message);
            res.status(200).send(isAdded);
        }
        catch (error) {
            res.status(400).send({ Message: "internal error" });
        }
    }
    async getMessageById(req, res) {
        try {
            const message = await this.messageService.getMessageById(req.body.id);
            res.status(200).send(message);
        }
        catch (error) {
            res.status(401).send({ Message: "internal error" });
        }
    }
    async getAllMessages(req, res) {
        try {
            const messages = await this.messageService.getMessages();
            res.status(200).send(messages);
        }
        catch (error) {
            res.status(401).send({ Message: "internal error" });
        }
    }
    async getAuthorIdByUserId(req, res) {
        try {
            const authorId = await this.messageService.getAuthorIdByMessageId(req.body.id);
            res.status(200).send(authorId);
        }
        catch (error) {
            res.status(401).send({ Message: "internal error" });
        }
    }
}
export { MessageController };
