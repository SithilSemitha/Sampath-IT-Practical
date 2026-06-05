import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT } from './config/env.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import bookRouter from './routes/books.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToTheDatabase from './database/monogodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);

app.use(errorMiddleware);
  
app.listen(PORT, async() => {
  console.log(`Server is running on port ${PORT}`);
  await connectToTheDatabase();
});

export default app;