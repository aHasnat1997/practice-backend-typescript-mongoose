import express, { Request, Response } from 'express';
import path from "path";
const app = express();

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello 🖕 World');
    res.sendFile(path.join(__dirname, '../view/index.html'));
})

export default app;