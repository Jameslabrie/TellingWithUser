let money, time;

function detectDayBudget() {
  function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?");
    }
  }
  start();

  let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };

  function expenses() {
    for (let i = 0; i < 2; i++) {
      let question1 = prompt("Введите обязательную статью расходов на месяц"),
        question2 = prompt("Во сколько обойдется?");

      if (
        typeof question1 == "string" &&
        typeof question1 != null &&
        typeof question2 != null &&
        question1 != "" &&
        question2 != "" &&
        question1.length < 20 &&
        question2.length < 10
      ) {
        appData.expenses[question1] = question2;
      } else {
        i = i - 1;
      }
    }
  }
  expenses();

  let budgetInOneDay = appData.budget / 30;

  alert("Ваш бюджет на один день: " + budgetInOneDay);
}
detectDayBudget();
