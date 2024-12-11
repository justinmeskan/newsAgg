import sqlite3 from "sqlite3";
// This is for development and debugging only
const sql3 = sqlite3.verbose();

const DB = new sql3.Database('newsDB.db', sqlite3.OPEN_READWRITE, connected);

function connected (err) {
    if (err) {
        console.error(err)
        return
    }
    console.log("Connected to DataBase")
}

let sql = `CREATE TABLE IF NOT EXISTS fakeNews(
    id INTEGER PRIMARY KEY,
    title TEXT,
    publishedAt TEXT,
    description TEXT,
    url TEXT,
    urlToImage TEXT,
    content TEXT
)`

DB.run(sql, [], (err) => {
    if (err) {
        console.log("Error creating table", err)
    } else {
        console.log("Table created")
    }
})

export { DB }
