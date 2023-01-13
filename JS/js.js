let money, time, budgetInOneDay, optExpenses;

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
  savings: true,
  chooseExpenses: function () {
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
  },
  detectDayBudget: function () {
    appData.budgetInOneDay = (appData.budget / 30).toFixed(1);

    alert("Ваш бюджет на один день: " + appData.budgetInOneDay);
  },
  detectLevel: function () {
    if (appData.budgetInOneDay < 50) {
      alert("Нужно ужаться!");
    } else if (appData.budgetInOneDay > 50 && appData.budgetInOneDay < 130) {
      alert("Вы можете жить хорошо!");
    } else {
      alert("Ваша жизнь полна красок!");
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let opt = prompt("Статья необязательных расходов?", "");
      appData.optionalExpenses[i] = opt;
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма ваших накоплений?"),
        procent = +prompt("Под какой процент?");

      appData.monthIncome = (save / 100 / 12) * procent;
      alert("Сумма заработка за месяц = " + appData.monthIncome);
    }
  },
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
