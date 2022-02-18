// ============================= Start JS= =====================================================

// get total income 
function getIncome() {
    const incomeInput = document.getElementById('income--input');
    const income = incomeInput.value;
    if (isNaN(income) || income < 0) {
        alert('Please Write a Valid Number in Income Field !!');
    }
    return income;
}
// handel total expenses 
function expenses() {
    const foodInput = document.getElementById('food-expense');
    const foodExpense = foodInput.value;
    if (isNaN(foodExpense) || foodExpense < 0) {
        window.alert('Please Write a Valid Number for Food Cost !!'); //error handling
    }
    const rentInput = document.getElementById('rent-expense');
    const rentExpense = rentInput.value;
    if (isNaN(rentExpense) || rentExpense < 0) {
        window.alert('Please Write a Valid Number for Rent Cost !!'); //error handling
    }
    const clothesInput = document.getElementById('clothes-expense');
    const clothesExpense = clothesInput.value;
    if (isNaN(clothesExpense) || clothesExpense < 0) {
        window.alert('Please Write a Valid Number for Clothe Cost !!'); //error handling
    }
    const inTotal = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothesExpense);
    return inTotal;
}


document.getElementById('submit-btn').addEventListener('click', function() {
    const total = expenses();
    const totalIncome = getIncome();
    const leftBalance = parseFloat(totalIncome) - total;

    if (totalIncome > total) {
        //   total expenses 
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = total;
        //  left total balance after calculate
        const getBalance = document.getElementById('balance');
        getBalance.innerText = leftBalance;
    } else if (totalIncome == total) {
        window.alert('No Balance Left for Deposit !!');
    } else if (totalIncome < total) {
        window.alert('Your Balance is low !! ');
    }


    //saving calculation

    document.getElementById('save-btn').addEventListener('click', function() {

        const savePercentageInput = document.getElementById('save-percentage');
        const savePercentageAmountText = savePercentageInput.value;
        const savePercentage = parseFloat(savePercentageAmountText);
        const saveInput = document.getElementById('saving-amount');
        const savingAmount = (parseFloat(totalIncome) * parseFloat(savePercentage)) / 100;
        // saveInput.innerText = savingAmount;

        //remain Balance calculation
        const remainBalanceInput = document.getElementById('remaining-balance');
        const remainBalance = parseFloat(leftBalance) - parseFloat(savingAmount);
        // remainBalanceInput.innerText = remainBalance;

        if (isNaN(savePercentage) || savePercentage < 0) {
            window.alert('Please Write a Valid Percentage for Saving Field !! '); //error handling
        } else if (savingAmount > leftBalance) {
            window.alert('You Can not Save More than Your Balance !!'); //error handling
        } else {
            saveInput.innerText = savingAmount;
            remainBalanceInput.innerText = remainBalance;
        }
    })
});



// ============================= End JS= =====================================================