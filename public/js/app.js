$(function () {

    //* FUNCTION */
    //Retrieves message input from user when button is clicked
    const getMessageInfo = function (event) {
        event.preventDefault();

        const newMessage = {
            sndr: $('#inputFrom').val(),
            rcvr: $('#inputTo').val(),
            title: $('#inputTitle').val().trim(),
            body: $('#inputMessage').val().trim()
        };

        console.log("newMessage", newMessage);

        postNote(newMessage)

        // render(newMessage);
    };



    const postNote = function(newMessage){
       
        const userId = newMessage.sndr;
        const rcvrId = newMessage.rcvr;
        const noteBody = newMessage.body;
        const noteTitle = newMessage.title;
        
        $.post('/api/kudos', {from: userId, to: rcvrId, title: noteTitle, body: noteBody})
        .then(function(data){
            console.log("data",data);
            renderMail();
        });

      };

//* FUNCTION *//
//Renders Receiver name and calls function to render notes
const renderMail = function () {

    console.log("renderMail");
    $('#to').empty();    

    // Make a GET request to /api/user/
    $.get('/api/user')
        .then(function (data) {
             
           
            
            // Pass data.receiverPosts to the render function. This is all the Products by each Department
            for (let i=0; i < data.length; i++) {
                
                const newTo = $(`<p>${data[i].username}</p>`);
                newTo.addClass('to-name');

               
                $('#to').append('<br><br><br>');                           
                $('#to').append(newTo);
                $('#to').append('<br>');
                
                //Render the notes to 
                console.log("data[i].username", data[i].username);
                render(data[i].receiverPosts);
                
            };
        });
};



    //* FUNCTION *//
    //Renders the messages
    const render = function(messages) {
        
        

        for (let i=0; i<messages.length; i++) {
            
            const renderTitle = $(`<p>${messages[i].title}</p>`);
            renderTitle.addClass('to-title');
            const renderFrom = $(`<p>From: ${messages[i].from}</p>`);
            renderFrom.addClass('to-from');          
            const renderMessage = $(`<p>Message: ${messages[i].body}</p>`);
            renderMessage.addClass('to-message');

            

            $('#to').append(renderTitle);
            $('#to').append(renderFrom);                                  
            $('#to').append(renderMessage);
            $('#to').append('<br>');
        };
    };




    //Form submit
    renderMail();
    $('#send').on('click', getMessageInfo);
});
    






