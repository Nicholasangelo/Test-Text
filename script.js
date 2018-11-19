
var toolbarOptions = [
    [{'align': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline',],
    [{ 'color': [] }, { 'background': [] }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['link', 'image', 'formula'],
    ['blockquote', 'code-block']
];

var editor = new Quill('#editor', {
    modules: { 
        toolbar: toolbarOptions },
    theme: 'snow'
  });