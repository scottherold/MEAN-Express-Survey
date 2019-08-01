// <--- Modules --->
const express = require('express'); // imports express module

// <--- Constructors --->
const app = express(); // constructs express server
const server = app.listen(8000); // needs to be constructed to use sockets
const io = require('socket.io')(server); // socket needs the know the server connection

// <--- Settings --->
app.use(express.static(__dirname + "/public")); // maps static dir

// establish connection
io.on('connection', socket => {
    // form submission
    socket.on('formSubmit', data => {
        console.log(data);
        let num = Math.floor(Math.random() * 999) + 1;
        socket.emit('update_message', {formData: JSON.stringify(data), numData: num});
    })
})
