let name = document.getElementById('Name');
let output = document.getElementById('Output');

name.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        output.innerHTML = 'Hello ' + name.value;
        console.log('Enter Pressed');
    }
});
