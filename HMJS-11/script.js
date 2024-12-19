// 1
const bankAccount = {
    ownerName: 'Bob Dou',
    accountNumber: '1233456',
    balance: 2000,
    deposite(amount){
        if(amount > 0) {
            this.balance += amount;
            alert(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance}`);
        } else{
            alert('Сумма для поповнення повина бути більше 0 грн.')
        }
    },
    withdraw(amount){
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            alert(`З рахунку знято ${amount}, поточний баланс ${this.balance}.`)
        } else if(amount > this.balance){
            alert('Недостатньо кошті на рахунку');
        } else {
            alert('Сумма для зняття повина бути більше 0 грн.')
        }
    }
};

if(confirm('Ви хочете поповнити рахунок?')) {
    const depositeAmount = parseFloat(prompt('Введіть суму для поповнення'));
    bankAccount.deposite(depositeAmount);
} else if(confirm('Ви хочете зняти кошти?')){
    const withdrawAmount = parseFloat(prompt('Введіть суму для зняття'));
    bankAccount.withdraw(withdrawAmount);
} else {
    alert('Операція скасована');
}