import Book from "../model/bookModel.js"; // Ensure the correct path and file extension

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error fetching data", error);
        res.status(500).json({ message: "Error fetching data", error });
    }
};
