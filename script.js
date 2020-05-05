let money = prompt ("Ваш бюджет на месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

let appData ={
    budget: money,
    optionalExpenses6 {},
    timeData: time,
    saving: false
};
let a1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt ("Во сколько обойдётся?", ''),
    a3 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt ("Во сколько обойдётся?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budjet / 30);