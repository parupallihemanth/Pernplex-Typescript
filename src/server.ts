import express, { Application, Request, Response } from 'express';

import movieRoutes from './routes/movie';
import castRoutes from './routes/cast';
import scheduleRoutes from './routes/schedule';

const app: Application = express();

// middlewares
app.use(express.json());

// Routes
app.use('/movies', movieRoutes);
app.use('/cast', castRoutes);
app.use('/schedule', scheduleRoutes)

const PORT: number = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))