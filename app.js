import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import moviesRoute from './routes/movies.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(dirname, '/public')));
app.use(express.json());
app.use('/movies', moviesRoute);
app.use(errorHandler);
app.use(notFoundHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
