// Escenario Gestión de Libros:
// Desarrolla un servidor Express que permita gestionar una lista de libros. Implementa las siguientes rutas:
// GET /books/: Devuelve la lista completa de libros.
// GET /books/:id Devuelve un único libro según el id recibido por parámetro (params).
// POST /books/: Permite agregar un nuevo libro. El libro debe tener un id único, un title, un author, y un year.
// PUT /books/:id : Permite actualizar el título, autor y año de publicación de un libro existente.
// DELETE /books/:id : Permite eliminar un libro por su id.

// Los datos deben ser manejados en memoria utilizando un array mutable.
// Datos:
// id: Número entero (generado automáticamente)
// title: Cadena de texto (obligatorio)
// author: Cadena de texto (obligatorio)
// year: Número entero (obligatorio)


const express = require("express")
const routes = require("./routes/book.routes")

const app = express();

//MIDDLEWARE
app.use(express.json())


//rutas de usuarios

app.use(routes)


app.listen(3000, ()=>{
    console.log("El servidor esta corriendo en la ruta http://localhost:3000");
})


