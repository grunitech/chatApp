import { createConnection } from "./dao/config.js";
const DatabaseMessagesQuery = ` CREATE TABLE IF NOT EXISTS "messages" (
                                    "authorId" INTEGER,
                                    "id" SERIAL PRIMARY KEY,
                                    "body" VARCHAR(255) NOT NULL,
                                    "timestamp" bigint,
                                    "likes" integer[])`;
const DatabaseUserDetail = `CREATE TABLE IF NOT EXISTS "userDetails" (
                            "id" SERIAL PRIMARY KEY,
                            "name" VARCHAR(50),
                            "username" VARCHAR(50),
                            "email" VARCHAR(50),
                            "address" json,
                            "phone" VARCHAR(30),
                            "website" VARCHAR(30),
                            "company" json)
                            `;
const DatabaseUsers = `CREATE TABLE IF NOT EXISTS "users" (
"id" integer PRIMARY KEY,
"name" VARCHAR(50)
)`;
// ignore this, just for showing that you can dynamically initiate tables
const db = await createConnection();
db.query(DatabaseMessagesQuery);
db.query(DatabaseUserDetail);
db.query(DatabaseUsers);
