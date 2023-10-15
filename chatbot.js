
//npm i chart.js

let input = document.getElementById('input');
let output = document.getElementById('Output');
//if (localStorage.name != undefined) { output.innerHTML = 'Good to see you again ' + localStorage.name + '!\nWhat are you looking to do today?' };

console.log(localStorage.name);
input.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        if (localStorage.name == undefined) {
            localStorage.setItem('name', input.value);
            output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Hello ' + localStorage.name + ', what is your current annual salary in USD?';
        }
        else if (localStorage.annualSalary == undefined) {
            console.log(Number(input.value) % 1 === 0);
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('annualSalary', Number(input.value));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'That means you make $' + ((localStorage.annualSalary / 12).toFixed(2)) + ' a month! Now let\'s figure out your monthly expenses.\nHow much do you pay each month for rent?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.';
            }
        }
        else if (localStorage.rent == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('rent', Number(input.value));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Great! About how much do you usually spend on utilities a month?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.utilities == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('utilities', Number(input.value));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Got it! Do you have a car?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.hasCar == undefined) {
            if (input.value.toLowerCase() == 'yes' || input.value.toLowerCase() == 'y') {
                localStorage.setItem('hasCar', true);
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Great! How much do you spend on your car each month?';
            }
            else if (input.value.toLowerCase() == 'no' || input.value.toLowerCase() == 'n') {
                localStorage.setItem('hasCar', false);
                localStorage.setItem('car', 0);
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Nice, that\'s one less monthly expense! Now how much do you spend on food each month?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please answer with only yes or no.'
            }
        }
        else if (localStorage.car == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('car', Number(input.value));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Nice! Now how much do you spend on food each month?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.food == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('food', Number(input.value));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'One last question about your expenses! How much do you spend on all other necessary expenses, such as loan payments and insurance, a month?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }
        }
        else if (localStorage.additional == undefined) {

            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('additional', Number(input.value));
                localStorage.setItem('totalExpenses', (Number(localStorage.rent) + Number(localStorage.utilities) + Number(localStorage.car) + Number(localStorage.food) + Number(localStorage.additional)));
                localStorage.setItem('totalRemaining', (((Number(localStorage.annualSalary) / 12) - Number(localStorage.totalExpenses)).toFixed(2)));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'In total after all necessary expenses you have an extra $' + localStorage.totalRemaining + ' a month! \nNow lets look towards the future! How much do you currently have saved for retirement?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.';
            }
        }
        else if (localStorage.savings == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('savings', Number(input.value));
                if (localStorage.savings < 10000) {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Thats a good start! ';
                }
                else {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Thats a good amount! ';
                }
                output.innerHTML = output.innerHTML + 'In how many years do you hope to retire?';

            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.';
            }
        }
        else if (localStorage.yearsLeft == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('yearsLeft', Number(input.value));
                if (localStorage.yearsLeft < 10) {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Seems like you\'re almost there!';
                }
                else {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'looks like you still have plenty of time to save up!';
                }
                output.innerHTML = output.innerHTML + '\nOf all money left over after essentials, about 60% should go towards \"wants\" such as hobbies, travel, and eating out. The remaining 40% should be put away for savings.\n';
                output.innerHTML = output.innerHTML + 'For you this looks like having $' + (localStorage.totalRemaining * .6).toFixed(2) + ' a month for wants and putting away $' + (localStorage.totalRemaining * .4).toFixed(2) + ' in savings. Does this sound like a good split?';

            }
        }
        else if (localStorage.savingPercent == undefined) {
            if (input.value.toLowerCase() == 'yes' || input.value.toLowerCase() == 'y') {
                localStorage.setItem('savingPercent', .4);
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Great! One last question, how much money do you hope to have saved by the time you retire?';
            }
            else if (input.value.toLowerCase() == 'no' || input.value.toLowerCase() == 'n') {
                localStorage.setItem('savingPercent', -1);
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'What percent of your remaining money would you rather save?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please answer with only yes or no.'
            }
        }
        else if (localStorage.savingPercent == -1) {
            if ((Number(input.value) % 1 === 0)) {
                if (Number(input.value) > 60) {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Thats a lot! Don\'t remember to have fun!';
                }
                else if (Number(input.value) < 20) {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Don\'t forget to try and save some money for later!';
                }
                else {
                    output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Sounds good!';
                }
                localStorage.setItem('savingPercent', (Number(input.value) / 100));
                output.innerHTML = output.innerHTML + '\nOne last question, how much money do you hope to have saved by the time you retire?';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }

        }
        else if (localStorage.goal == undefined) {
            if ((Number(input.value) % 1 === 0)) {
                localStorage.setItem('goal', Number(input.value));
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Thats a good goal!\n';
                localStorage(userArray, []);
                localStorage.setItem('totalSaved', (localStorage.savingPercent * localStorage.totalRemaining * 12 * localStorage.yearsLeft + Number(localStorage.savings)));
                if (Number(localStorage.totalSaved) >= Number(localStorage.goal)) {
                    output.innerHTML = output.innerHTML + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + localStorage.totalSaved.toFixed(2) + ' saved up by the time you retire! Looks like you\'re already on track to reach your goal of $' + localStorage.goal + '!';
                }
                else {
                    output.innerHTML = output.innerHTML + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + localStorage.totalSaved.toFixed(2) + ' saved up by the time you retire. You\'ll have to save your money wisely to reach your goal of $' + localStorage.goal + '.';
                }
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }




        }

        else {
            output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'You have input all necessary data! You make $' + localStorage.annualSalary.toFixed(2) + ' a year and have an extra $' + ((Number(localStorage.annualSalary) / 12) - Number(localStorage.totalExpenses)).toFixed(2) + ' a month after all expenses are paid!';
        }
        document.getElementById('Output').scrollTop += 10000000;
        document.getElementById('input').value = '';
    }
})

function redirect(page) {
    localStorage.clear();
    window.location.href = page + ".html";
    console.log('redirected to ' + page);
};

let myChart = document.getElementById('myChart').getContext('2d');
if (!(localStorage.savingPercent == undefined)) {

    let data = [
        localStorage.rent,
        localStorage.utilities,
        localStorage.car,
        localStorage.food,
        localStorage.additional,
        localStorage.savingPercent * localStorage.totalRemaining,
        (1 - localStorage.savingPercent) * localStorage.totalRemaining
    ];
    let expensesPieChart = new Chart(myChart, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Car', 'Food', 'Additional Expenses', 'Saving', 'Discretionary'],
            datasets: [{
                label: 'Spending',
                data: data
            }]
        },
        options: {}
    });
}
