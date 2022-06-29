import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import path from 'path';


export const startServer = () => {

    const app: Express = express();
    const PORT = process.env.PORT || 3001;

    app.use(cors());
    app.use('/', express.static(path.join(__dirname, '../../views')));

    app.get('/', (req: Request, res: Response) => {
        res.send('Hello world!');
    });

    return app.listen(PORT, () => {
        console.log(`app is running on port ${PORT}`);
    });

}