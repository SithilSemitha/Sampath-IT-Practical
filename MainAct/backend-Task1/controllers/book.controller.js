import mongoose from 'mongoose';
import Book from '../models/book.model.js';

export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      success: true,
      message: 'Books fetched successfully',
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const { title, author, publishedDate, genre, pages } = req.body;

    if (!title || !author || !publishedDate || !genre || pages == null) {
      const error = new Error('title, author, publishedDate, genre, and pages are required');
      error.statusCode = 400;
      throw error;
    }

    const book = await Book.create({ title, author, publishedDate, genre, pages });

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      const error = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: 'Book fetched successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      const error = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }

    const { title, author, publishedDate, genre, pages } = req.body;

    book.title = title ?? book.title;
    book.author = author ?? book.author;
    book.publishedDate = publishedDate ?? book.publishedDate;
    book.genre = genre ?? book.genre;
    book.pages = pages ?? book.pages;

    await book.save();

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      const error = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }

    await book.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

