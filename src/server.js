import express from 'express';
import router from '../src/routes/eventos.router.js';

const app = express();
app.use(express.json());
app.use('/eventos',router);
app.use('/eventos/:id', router);
app.use('/eventos', router);
app.use('/eventos/:id', router);

const PORTA =   process.env.PORTA || 3000;
app.listen(PORTA);