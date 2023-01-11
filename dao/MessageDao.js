import { createConnection } from "./config.js";
import { CrudDao } from "./Dao.js";
class MessageDao extends CrudDao {
    constructor() {
        super();
        this.client = createConnection();
    }
    // using promise with catch. not async
    add(t) {
        const query = "INSERT INTO messages (authorid, id, body, timestamp, likes) VALUES ($1, $2, $3, $4, $5)";
        var result = true;
        this.client.query(query, [t.authorId, t.id, t.body, t.timestamp, t.likes])
            .catch((e) => result = false);
        return result;
    }
    remove(t) {
        throw new Error("Method not implemented.");
    }
    find(id) {
        const query = "SELECT * FROM messages WHERE id == $1";
        throw new Error("Method not implemented.");
    }
    // Method that return all messages
    // using async
    async getAllMessages() {
        const query = "SELECT * FROM messages";
        let res = [];
        await this.client.query(query).then((data) => {
            res = data.rows[0];
            console.log("data:");
            console.log(data);
        }).catch((error) => console.log(error));
        return res;
    }
    // another example, not implemented fully
    async getAuthorIdByMessageId(id) {
        const query = "SELECT authorid FROM messages WHERE id == $1";
        try {
            return await this.client.query(query, [id]).rows[0];
        }
        catch (error) {
            console.log(error);
        }
    }
}
// example of not adding params to query but to string and thus enabling SQL injection 
async function getAuthorIdByMessageId(inject) {
    const query = "SELECT authorid FROM messages WHERE id == " + inject;
    // not implementing it, just a beginning of method that allows sql injection
    try {
    }
    catch (error) {
        console.log(error);
    }
}
// what will happen if we run this?
getAuthorIdByMessageId("1; drop table messages --");
// notice that there are `` in the supposed SQL attack, and thus preventing the injection.
// the id will be compare to the string:  id == `1; drop table messages --`
const queryWithoutInjection = "SELECT authorid FROM messages WHERE id == `1; drop table messages --`";
// allows injection
// the id will be compare to the number, and then 'drop table messages' will be running.
const queryWithInjection = "SELECT authorid FROM messages WHERE id == 1; drop table messages --";
export { MessageDao };
