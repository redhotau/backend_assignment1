const router = require("express").Router();
const books = require("../data/books.json");
const fs = require('fs');

// semua product json
router.get("/", (req, res) => {
    res.json(books);
});
router.get("/books", (req, res) => {
    res.json(books);
});

// books by id
router.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const book = books.find((item) => item.id === Number(id));
    if (!books) {
        return res.status(404).send("product not found");
    }
    res.json (book);
});

// ejs books
router.get("/ejs/books", (req, res) => {
    res.render("table", {books});
});


module.exports = router;