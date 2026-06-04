import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    author: {
        type: String,
        required: [true, "Book author is required"],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    publishedDate: {
        type: Date,
        required: [true, "Published date is required"],
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        trim: true,
        maxLength: 50,
    },
    pages: {
        type: Number,
        required: [true, "Number of pages is required"],
        min: 1,
    }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;