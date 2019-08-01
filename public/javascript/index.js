$( () => {
    var socket = io(); // Constructs socket from HTML link + server

    // Form submission
    $('#submit').click( () =>  {
        // emit JSON data to server
        socket.emit('formSubmit', {
            name: $('#name').val(),
            dojo: $('#dojo').val(),
            language: $('#language').val(),
            comment: $('#comment').val()
        });
    });

    // Form retrieval
    socket.on('update_message', data => {
        console.log(data);
        let htmlData = `<div id="content" class="col-6 bg-success p-3 rounded">
                            <h6 class="text-center text-white"> You have emitted the following to the server:<h6>
                            <p class="text-center text-white">${data.formData}</P>
                            <p class="text-center text-white">Your lucky number emitted by the server is: ${data.numData}</p>
                        </div>`
        $('#content').html(htmlData);
    });
});