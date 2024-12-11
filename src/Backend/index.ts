import bodyParser from "body-parser";
import express, { Request, Response, Application } from 'express';
import axios from "axios";
import { DB } from '../DataBase/connect';
import cors from "cors"

const app: Application = express();
app.use(bodyParser.json())
const port = 3000;
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.set("content-type", "application/json")
    let sql = `SELECT * FROM fakeNews`
    DB.all(sql, function(err, rows) {
        let tableRows = rows.map(function (row) {
            return row
            // tableRows.push(row.title, row.publishedAt, row.description, row.url, row.content);    // and other columns, if desired
            // res.json(tableRows);

        })
        res.json(tableRows);

    });
    // res.send("");

});


// API to fetch and store the FAKE-NEWS data
app.get('/data', async (req: Request, res: Response) => {
 try {
     const data = await axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=e6d8883419554c93bfe2ce8916dd7e0c')
     res.set("content-type", "application/json")
     let sql = `INSERT INTO fakeNews(title, publishedAt, description, url, content, urlToImage) VALUES(?,?,?,?,?,?) `
     if (data.data.articles) {
         const newsDataSource = data.data.articles.map((artObj) => {
             DB.run(sql, [artObj.title, artObj.publishedAt, artObj.description, artObj.url, artObj.content, artObj.urlToImage], function(err: Error) {
                 if (err) {
                     console.log('ERROR', err.message)
                 }
             })
         })
         res.send(newsDataSource);
     }
     res.status(200)
 } catch(err) {
     console.log('/data API crashed with this error message', err.message)
     res.status(400)
 }
});

app.get('/news?state=x&topic=y&search=keyword', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Express!');

    // GET /news?state=x&topic=y&search=keyword: Retrieve a list of news
    // articles filtered by state, topic, or search keywords.
});

app.get('/news/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Express!');

    // ■ GET /news/
    // : Retrieve detailed information about a specific news article.
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
