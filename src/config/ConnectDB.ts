import {createConnection} from 'typeorm';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import prop from './property';

export const initDatabaseConnection = async () => {
    await createConnection(<ConnectionOptions>{
        type: prop.DATABASE.TYPE,
        host: prop.DATABASE.HOST,
        port: prop.DATABASE.PORT,
        username: prop.DATABASE.USERNAME,
        password: prop.DATABASE.PASSWORD,
        database: prop.DATABASE.NAME,
        entities: [__dirname + "/../entities/*{.js,.ts}"],
        synchronize: true,
        logging: 'all'
    });

    console.log('successfully connected to DB');
}