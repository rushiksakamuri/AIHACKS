let name = document.getElementById('Name');
let output = document.getElementById('Output');
let homeButton = document.getElementById('HomeButton');

name.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        output.innerHTML = 'Hello ' + name.value;
        console.log('Enter Pressed');
    }
});
function redirect(page) {
    window.location.href = page + ".html";
    console.log('redirected to ' + page);
};

