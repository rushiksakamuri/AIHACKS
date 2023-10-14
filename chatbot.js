let input = document.getElementById('input');
let output = document.getElementById('Output');
let homeButton = document.getElementById('HomeButton');
let name = null;
let annualSalary = -1;

input.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        if (name == null) {
            name = input.value;
            output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Hello ' + input.value + ', what is your current annual salary in USD?';
        }
        else if (annualSalary == -1) {
            console.log(Number(input.value) % 1 === 0);
            if ((Number(input.value) % 1 === 0)) {
                console.log(Number(input.value));
                annualSalary = Number(input.value);
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'That means you make $' + ((annualSalary/12).toFixed(2)) +  ' a month!' ;
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.';
            }
        }

        else {
            console.log('how did we get here');
            //output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br';
        }

        document.getElementById('input').value = '';
    }
});
function redirect(page) {
    window.location.href = page + ".html";
    console.log('redirected to ' + page);
};

