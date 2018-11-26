
var toolbarOptions = [
    [{ 'align': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline',],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image', 'formula'],
    ['blockquote', 'code-block']
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});

$(document).ready(function () {
    $("#resourceBlock").css("display", "none");


    $("#viewNotes").on("click", function () {
        $("#resourceBlock").css("display", "block");

    })

    $(".close").on("click", function () {
        $("#resourceBlock").css("display", "none");

    })

})

$("#saveProject").on("click", function (event) {
    event.preventDefault();
    var deltaText = quill.getText();
    console.log("this is user input text, not attr: " + deltaText)
    var delta = quill.getContents();
    console.log("deltaContents: " + delta)
// });



// POST request to router.post("/api/burgers", ...) in burgers_controller.js
$.ajax("/api/notes",
    // and send POST body JSON with data
    {
        type: "POST",
        data: deltaText
    })

    // .then, when POST responds by sending (res),
    .then(function () {

        // confirm creation of new item
        // console.log("created new code to devour");

        // and reload the page so selectAll() can display updated list
        location.reload();

        });
    });

// });

// })

// $("#saveNote").on("click", function (event) {
//     event.preventDefault();
//         var newNote = {
//             Title: $("#noteTitle").val().trim(),
//             Body: $("#editor").val().trim(),
//             category: $("#category").val().trim()
//         }

        // POST request to router.post("/api/burgers", ...) in burgers_controller.js
        // $.ajax("/api/notes",
            // and send POST body JSON with data
            // {
            //     type: "POST",
            //     data: newNote
            // })

            // .then, when POST responds by sending (res),
            // .then(function () {

                // confirm creation of new item
                // console.log("created new code to devour");

                // and reload the page so selectAll() can display updated list
    //             location.reload();

    //         });

    // });
