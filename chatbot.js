
let input = document.getElementById('input');
let output = document.getElementById('Output');

console.log(localStorage.name);
input.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        if (localStorage.name == undefined) {
            localStorage.setItem('name', input.value);
            output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Hello ' + localStorage.name + ', what is your current annual salary in USD?';
        }
        else if (localStorage.annualSalary == undefined) {
            console.log(Number(input.value) % 1 === 0);
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('annualSalary', Number(input.value));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'That means you make $' + ((localStorage.annualSalary / 12).toFixed(2)) + ' a month! Now let\'s figure out your monthly expenses.<br>How much do you pay each month for rent?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.';
            }
        }
        else if (localStorage.rent == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('rent', Number(input.value));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Great! About how much do you usually spend on utilities a month?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.utilities == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('utilities', Number(input.value));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Got it! Do you have a car?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.hasCar == undefined) {
            if (input.value.toLowerCase() == 'yes' || input.value.toLowerCase() == 'y') {
                localStorage.setItem('hasCar', true);
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Great! How much do you spend on your car each month?';
            }
            else if (input.value.toLowerCase() == 'no' || input.value.toLowerCase() == 'n') {
                localStorage.setItem('hasCar', false);
                localStorage.setItem('car', 0);
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Nice, that\'s one less monthly expense! Now how much do you spend on food each month?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please answer with only yes or no.'
            }
        }
        else if (localStorage.car == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('car', Number(input.value));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Nice! Now how much do you spend on food each month?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }    
        }
        else if (localStorage.food == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                console.log(localStorage.car);
                localStorage.setItem('food', Number(input.value));
                localStorage.setItem('totalExpenses', (Number(localStorage.rent) + Number(localStorage.utilities) + Number(localStorage.car) + Number(localStorage.food)));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Congrats! You have entered all necessary data!<br>In total after all expenses you have an extra $' + ((Number(localStorage.annualSalary)/12) - Number(localStorage.totalExpenses)) + ' a month!';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }
        }
        else{
            output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'You have input all necessary data! You make $' + localStorage.annualSalary + ' a year and have an extra $' + ((Number(localStorage.annualSalary) / 12) - Number(localStorage.totalExpenses)) + ' a month after all expenses are paid!' ;
        }
        document.getElementById('input').value = '';
    }
});
function redirect(page) {
    localStorage.clear();
    window.location.href = page + ".html";
    console.log('redirected to ' + page);
};
