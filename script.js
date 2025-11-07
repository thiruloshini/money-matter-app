const balance = document.getElementById('balance');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const addBtn = document.getElementById('add-btn');

let transactions = [];

function updateBalance() {
  const total = transactions.reduce((acc, item) => acc + item.amount, 0);
  balance.innerText = total.toFixed(2);
}

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add text and amount');
    return;
  }

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateBalance();

  text.value = '';
  amount.value = '';
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  item.textContent = `${transaction.text} ${sign}₹${Math.abs(transaction.amount)}`;
  list.appendChild(item);
}

addBtn.addEventListener('click', addTransaction);
