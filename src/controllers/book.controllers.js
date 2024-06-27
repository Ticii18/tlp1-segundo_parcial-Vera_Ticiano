const db = require("../db/db")

const getBooks = (req, res) => {
    res.send(db)
}

const getBooksById = (req, res) => {
    const id = parseInt(req.params.id);
    const book = db.find(book => book.id === id)
    !book ? res.json({ message: "ID no encontrado" }) : res.json(book)

}

const postBook = (req, res) => {
    let id = db.length + 1;
    const { title, author, year } = req.body;
    if (typeof title !== 'string' || typeof author !== 'string') {
        res.json({ message: "El título y el autor deben ser texto" });
    }
    if (!title || !author || !year) {
        res.json({ message: "Los campos deben estar rellenos" })
    }
    else {
        const verificarLibro = db.find(book => book.title === title && book.author === author);
        if (verificarLibro) {
            res.json({ message: "El libro ya existe en la base de datos" })
        }
        else {
            db.push({ id: id, title: title, author: author, year: year });
        }
    }


    res.json({ message: "Libro agregado con éxito" });
}

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id)
    const book = db.find(books => books.id === id)
    const bookIndex = db.indexOf(book)
    !book ? res.json({ message: "El id que desea eliminar no existe" }) : db.splice(bookIndex, 1)
    res.send({ message: 'Se elimino el usuario', id: id })

}

const putBook = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, author, year } = req.body
    if (typeof title !== 'string' || typeof author !== 'string') {
        res.json({ message: "El título y el autor deben ser texto" });
    }
    const book = db.find(user => user.id === id)
    !book ? res.send({ Message: 'El id que quiere modificar no existe' }) : book.title = title; book.author = author; book.year = year
    res.send({ Message: 'Se modifico correctamente el usuario', id: id })

}

module.exports = { getBooks, getBooksById, postBook, putBook, deleteBook }