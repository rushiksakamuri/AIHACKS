

let input = document.getElementById('input');
let output = document.getElementById('Output');
let updating = false;
if (localStorage.name != undefined) {
    output.innerHTML = 'Good to see you again ' + localStorage.name + '!'
    if (localStorage.annualSalary == undefined || localStorage.rent == undefined || localStorage.utilities == undefined || localStorage.hasCar == undefined || localStorage.car == undefined || localStorage.food == undefined || localStorage.yearsLeft == undefined || localStorage.totalExpenses == undefined || localStorage.totalSaved == undefined) {
        console.log('in');
        output.innerHTML = output.innerHTML + ' Let\'s finish setting up your account!';
        if (localStorage.annualSalary == undefined) {
            output.innerHTML = output.innerHTML + '\nWhat is your current annual salary?';
        }
        else if (localStorage.rent == undefined) {
            output.innerHTML = output.innerHTML + '\nWhat is your current monthly rent payment?';
        }
        else if (localStorage.utilities == undefined) {
            output.innerHTML = output.innerHTML + '\nWhat are your current monthly utility charges?';
        }
        else if (localStorage.hasCar == undefined) {
            output.innerHTML = output.innerHTML + '\nDo you make payments on a car?';
        }
        else if (localStorage.car == undefined) {
            output.innerHTML = output.innerHTML + '\nWhat are your current monthly car payments?';
        }
        else if (localStorage.food == undefined) {
            output.innerHTML = output.innerHTML + '\nHow much do you spend a month on food?';
        }
        else if (localStorage.additional == undefined) {
            output.innerHTML = output.innerHTML + '\nWhat are your monthly expenses on loan payments and insurance?';
        }
        else if (localStorage.savings == undefined) {
            output.innerHTML = output.innerHTML + '\nHow much do you currently have in savings?';
        }
        else if (localStorage.yearsLeft == undefined) {
            output.innerHTML = output.innerHTML + '\nIn how many years do you hope to retire?';
        }
        else if (localStorage.savingPercent == undefined) {
            output.innerHTML = output.innerHTML + '\nWhat percent of additional money a month do you want to save or invest?';
        }
        else if (localStorage.goal == undefined) {
            output.innerHTML = output.innerHTML + '\nHow much money do you hope to have saved by the time you retire?';
        }
    }
    else {
        output.innerHTML = output.innerHTML + '\nWhat do you want to do today? Type \'?\' for list of current capabilities';
    } 

};

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
                }                else if (Number(input.value) < 20) {
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
                //localSeresdfdfsdsftorage(userArray, []);
                localStorage.setItem('totalSaved', (localStorage.savingPercent * localStorage.totalRemaining * 12 * localStorage.yearsLeft + Number(localStorage.savings)));
                if (Number(localStorage.totalSaved) >= Number(localStorage.goal)) {
                    output.innerHTML = output.innerHTML + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + Number(localStorage.totalSaved).toFixed(2) + ' saved up by the time you retire! Looks like you\'re already on track to reach your goal of $' + localStorage.goal + '!';
                }
                else {
                    output.innerHTML = output.innerHTML + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + Number(localStorage.totalSaved).toFixed(2) + ' saved up by the time you retire. You\'ll have to save your money wisely to reach your goal of $' + localStorage.goal + '.';
                }
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'Please enter only the number amount.'
            }
        }
        else if (input.value == '?' || input.value == '\'?\'') {
            output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + '1. Check if you are currently on track to meet retirement goals\n2.Edit information\n3.See how investing and saving in different ways can impact your savings over time';
        }
        else if (input.value == '1' || input.value == '1.') {
            if (Number(localStorage.totalSaved) >= Number(localStorage.goal)) {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + Number(localStorage.totalSaved).toFixed(2) + ' saved up by the time you retire! Looks like you\'re on track to reach your goal of $' + localStorage.goal + '!';
            }
            else {
                output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'If you keep saving at your current rate for the next ' + localStorage.yearsLeft + ' years you\'ll have $' + Number(localStorage.totalSaved).toFixed(2) + ' saved up by the time you retire. You\'ll have to save your money wisely to reach your goal of $' + localStorage.goal + '.';
            }
        }
        else if (input.value == '2' || input.value == '2.') {
            output.innerHTML = output.innerHTML +  '\n\n' + input.value + '\n\n' + 'To update information navigate to the Account page.';
        }
        else if (input.value == '3' || input.value == '3.') {
            output.innerHTML = output.innerHTML + '\n\n' + input.value + '\n\n' + 'You currently are saving ' + (Number(localStorage.savingPercent)*100);
        }
        document.getElementById('Output').scrollTop += 10000000;
        document.getElementById('input').value = '';
    }
})

function redirect(page) {
    window.location.href = page + ".html";
    console.log('redirected to ' + page);
};

function clearData() {
    localStorage.clear();
}

function makePieChart() {
    let myChart = document.getElementById('myChart').getContext('2d');
    if (!(localStorage.savingPercent == undefined)) {

        let data = [
            localStorage.rent,
            localStorage.utilities,
            localStorage.car,
            localStorage.food,
            localStorage.additional,
            localStorage.savingPercent * localStorage.totalRemaining,
            (1 - localStorage.savingPercent) * localStorage.totalRemaining,

        ];
        let backgroundColor = [
            "#878BB6",
            "#4ACAB4",
            "#FF8153",
            "#a2add0",
            "#FFEA88",
            "#c6e2ff",
            "#b3dca0"


        ]
        let expensesPieChart = new Chart(myChart, {
            type: 'pie',
            data: {
                labels: ['Rent', 'Utilities', 'Car', 'Food', 'Additional Expenses', 'Saving', 'Discretionary'],
                datasets: [{
                    label: 'Spending',
                    data: data,
                    backgroundColor:backgroundColor
                }]
            },
            options: {}
        });
    }
}
//makePieChart();
