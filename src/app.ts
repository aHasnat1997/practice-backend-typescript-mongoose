import express, { Application, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import { UserRoute } from './modules/user/user.route';

// creating express application 
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// app all api route
app.use('/api/v1/users', UserRoute);

/**
 * send html as response when hit in root route
 */
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
})

export default app;