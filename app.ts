import express, { Express, Request, Response } from 'express';
import { MessageController } from './controller/MessageController.js';

const server = express();
const port = 9000; // default port to listen

// Initialize Controllers
const messageControlloer = new MessageController()

// ////////////// Middleware ////////////// 

// Web API
// getting all messages from the database
// the only endpoint that we implemented fully together
server.get('/messages/all', (req, res) => {
    console.log('trying get all messages')
    return messageControlloer.getAllMessages(req, res)
});

// another example -> not implement
server.post('/messages/add', (req, res) => {
    console.log('adding message')
    return messageControlloer.add(req, res)
})

// another example -> not implement
server.post('messages/get-author-id-by-user-id', (req,res) => {
    return messageControlloer.getAuthorIdByUserId(req, res)
})

// start the express server
server.listen(port, () => {
    console.log( `server started at port:${ port }` );
} );

