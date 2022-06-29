import { initDatabaseConnection } from './config/ConnectDB';
import { startServer } from './config/Server';

(async () => {
    await initDatabaseConnection();
    await startServer();
})();
