let money = prompt("Ваш бюджет на месяц?"),
  time = prompt("Введите дату в формате YYYY-MM-DD"),
  expensesName = prompt("Введите обязательную статью расходов на месяц"),
  expenses = prompt("Во сколько обойдется?"),
  expensesNameTwo = prompt("Введите обязательную статью расходов на месяц"),
  expensesTwo = prompt("Во сколько обойдется?");

let appData = new Object();
appData.budget = money;
appData.timeData = time;
appData.expenses = { expensesName: expenses, expensesNameTwo: expensesTwo };
appData.optionalExpenses;
appData.income = [];
appData.savings = false;

let budgetInOneDay = (money + appData.income - expenses - expensesTwo) / 30;

alert("Ваш бюджет на один день: " + budgetInOneDay);
