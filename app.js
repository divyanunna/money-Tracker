async function addTransaction() {
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;
  
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
  
    const transaction = { type, amount, description };
  
    try {
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
  
      const newTransaction = await response.json();
      displayTransaction(newTransaction);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  }
  
  async function fetchTransactions() {
    try {
      const response = await fetch('/api/transactions');
      const transactions = await response.json();
      transactions.forEach(displayTransaction);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }
  
  function displayTransaction(transaction) {
    const transactionsDiv = document.getElementById('transactions');
    const transactionDiv = document.createElement('div');
    transactionDiv.innerHTML = `<strong>${transaction.type}</strong> - ${transaction.amount} - ${transaction.description}`;
    transactionsDiv.appendChild(transactionDiv);
  }
  
  // Fetch transactions on page load
  fetchTransactions();async function addTransaction() {
  const type = document.getElementById('type').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const description = document.getElementById('description').value;

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  const transaction = { type, amount, description };

  try {
    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });

    const newTransaction = await response.json();
    displayTransaction(newTransaction);
  } catch (error) {
    console.error('Error adding transaction:', error);
  }
}

async function fetchTransactions() {
  try {
    const response = await fetch('/api/transactions');
    const transactions = await response.json();
    transactions.forEach(displayTransaction);
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
}

function displayTransaction(transaction) {
  const transactionsDiv = document.getElementById('transactions');
  const transactionDiv = document.createElement('div');
  transactionDiv.innerHTML = `<strong>${transaction.type}</strong> - ${transaction.amount} - ${transaction.description}`;
  transactionsDiv.appendChild(transactionDiv);
}

// Fetch transactions on page load
fetchTransactions();