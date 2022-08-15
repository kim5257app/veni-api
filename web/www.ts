import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({ limit: '100mb' }));

app.use('/test', require('./test').default);
app.use('/oauth', require('./oauth').default);

export default app;
