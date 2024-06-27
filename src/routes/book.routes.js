const routes = require("express").Router()
const {getBooks,getBooksById,postBook,putBook,deleteBook,index } = require("../controllers/book.controllers")


routes.get('/', index)

routes.get('/books/',getBooks )

routes.get('/books/:id',getBooksById)

routes.post('/books/',postBook );

routes.put('/books/:id' ,putBook )

routes.delete('/books/:id',deleteBook )

module.exports = routes