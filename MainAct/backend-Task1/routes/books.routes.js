import { Router} from 'express';
import { getBooks, createBook, getBookById, updateBookById, deleteBookById } from '../controllers/book.controller.js';
import authorize from "../middleware/auth.middleware.js";


const bookRouter = Router();

bookRouter.get('/', getBooks);
bookRouter.post('/',authorize, createBook);
bookRouter.get('/:id',authorize, getBookById);
bookRouter.put('/:id',authorize, updateBookById);
bookRouter.delete('/:id',authorize, deleteBookById);

export default bookRouter;