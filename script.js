// console.log("Hello!");

//selectors
let updateBudgetButton = document.querySelector("#update_budget");
let addExpenseButton = document.querySelector("#add_expense");
let monthlyBudgetButton = document.querySelector("#monthly_budget");
let incomeInput = document.querySelector("#income_input");
let remainingBalance = document.querySelector("#remaining_balance");
let amountInput = document.querySelector("#amount_input");
let name = document.querySelector("#name_input");
let expenseList = document.querySelector("#expense_list");
let totalExpense = document.querySelector("#total_expenses");

// events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

// variables
let monthlyIncome = 0;
let expense = [];
let expenseTotal = 0;
let balance = 0;

// functions
function updateBudget(event) {
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyIncome.innerText = "$" + monthlyIncome;
    updateBalance();
}

function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

function addExpense(event) {
    event.preventDefault();
   
    let expense = {
        expenseName: nameInput.value,
        expenseAmount: amountInput.value
    };

    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    expenseAmount = parseInt(amountInput.value);
    expense.push(expenseAmount);
    nameInput.value - '';
    amountInput.value = '';
    updateExpenseTotal();
}

function updateExpenseTotal() {
    expenseTotal = 0;
    for (let i = 0; i < expenses. length; i++) {
        expenseTotal = expenseTotal + expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
}