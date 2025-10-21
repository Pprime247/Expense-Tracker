const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('add');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function renderExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;
    const li = document.createElement('li');
    li.innerHTML = `${exp.desc} - ₦${exp.amount} <button onclick="deleteExpense(${index})">❌</button>`;
    expenseList.appendChild(li);
  });

  totalDisplay.textContent = total;
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function addExpense() {
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!desc || isNaN(amount)) {
    alert('Please enter valid data');
    return;
  }

  expenses.push({ desc, amount });
  descInput.value = '';
  amountInput.value = '';
  renderExpenses();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

addBtn.addEventListener('click', addExpense);
renderExpenses();
