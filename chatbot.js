
let input = document.getElementById('input');
let output = document.getElementById('Output');
if (localStorage.name != undefined) { output.innerHTML = 'Good to see you again ' + localStorage.name + '!<br>What are you looking to do today?'};

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
                localStorage.setItem('food', Number(input.value));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'One last question about your expenses! How much do you spend on all other necessary expenses, such as loan payments and insurance, a month?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.additional == undefined) {

            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('additional', Number(input.value));
                localStorage.setItem('totalExpenses', (Number(localStorage.rent) + Number(localStorage.utilities) + Number(localStorage.car) + Number(localStorage.food) + Number(localStorage.additional)));
                localStorage.setItem('totalRemaining', (((Number(localStorage.annualSalary) / 12) - Number(localStorage.totalExpenses)).toFixed(2)));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'In total after all necessary expenses you have an extra $' + localStorage.totalRemaining + ' a month! <br>Now lets look towards the future! How much do you currently have saved for retirement?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.';
            }
        }
        else if (localStorage.savings == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('savings', Number(input.value));
                if (localStorage.savings < 10000) {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Thats a good start! ';
                }
                else {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Thats a good amount! ';
                }
                output.innerHTML = output.innerHTML + 'In how many years do you hope to retire?';

            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.';
            }
        }
        else if (localStorage.yearsLeft == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('yearsLeft', Number(input.value));
                if (localStorage.yearsLeft < 10) {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Seems like you\'re almost there!';
                }
                else {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'looks like you still have plenty of time to save up!';
                }
                output.innerHTML = output.innerHTML + '<br>Of all money left over after essentials, about 60% should go towards \"wants\" such as hobbies, travel, and eating out. The remaining 40% should be put away for savings.<br>';
                output.innerHTML = output.innerHTML + 'For you this looks like having $' + (localStorage.totalRemaining * .6) + ' a month for wants and putting away $' + (localStorage.totalRemaining * .4) + ' in savings. Does this sound like a good split?';

            }
        }
        else if (localStorage.savingPercent == undefined) {
            if (input.value.toLowerCase() == 'yes' || input.value.toLowerCase() == 'y') {
                localStorage.setItem('savingPercent', .4);
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Great! One last question, how much money do you hope to have saved by the time you retire?';
            }
            else if (input.value.toLowerCase() == 'no' || input.value.toLowerCase() == 'n') {
                localStorage.setItem('savingPercent', -1);
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'What percent of your remaining money would you rather save?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please answer with only yes or no.'
            }
        }
        else if (localStorage.savingPercent == -1) {
            if ((Number(input.value) % 1 === 0)) {
                if (Number(input.value) > 60) {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Thats a lot! Don\'t remember to have fun!';
                }
                else if (Number(input.value) < 20) {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Don\'t forget to try and save some money for later!';
                }
                else {
                    output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Sounds good!';
                }
                localStorage.setItem('savingPercent', (Number(input.value) / 100));
                output.innerHTML = output.innerHTML + '<br>One last question, how much money do you hope to have saved by the time you retire?';
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }

        }
        else if (localStorage.goal == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('goal', Number(input.value));
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Thats a good goal!<br>';
                localStorage.setItem('totalSaved', (localStorage.savingPercent * localStorage.totalRemaining * 12 * localStorage.yearsLeft +  Number(localStorage.savings)));
                if (Number(localStorage.totalSaved) >= Number(localStorage.goal)) {
                    output.innerHTML = output.innerHTML + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + localStorage.totalSaved + ' saved up by the time you retire! Looks like you\'re already on track to reach your goal of $' + localStorage.goal + '!';
                }
                else {
                    output.innerHTML = output.innerHTML + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + localStorage.totalSaved + ' saved up by the time you retire. You\'ll have to save your money wisely to reach your goal of $' + localStorage.goal + '.';
                }
            }
            else {
                output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'Please enter only the number amount.'
            }


            
           
        }

        else {
            output.innerHTML = output.innerHTML + '<br><br>' + input.value + '<br><br>' + 'You have input all necessary data! You make $' + localStorage.annualSalary + ' a year and have an extra $' + ((Number(localStorage.annualSalary) / 12) - Number(localStorage.totalExpenses)) + ' a month after all expenses are paid!';
        }
        document.getElementById('input').value = '';
    }
})

function redirect(page) {
        localStorage.clear();
        window.location.href = page + ".html";
        console.log('redirected to ' + page);
};
