// 1.1

let dayNumber = +prompt("Введіть номер дня тижня (1-7):");

switch (dayNumber) {
    case 1:
        console.log(`Понеділок`);
        break;
    case 2:
        console.log(`Вівторок`);
        break;
    case 3:
        console.log(`Середа`);
        break;
    case 4:
        console.log(`Четвер`);
        break;
    case 5:
        console.log(`П'ятниця`);
        break;
    case 6:
        console.log(`Субота`);
        break;
    case 7:
        console.log(Неділя);
        break;
    default:
        console.log(`Дня з таким номером не існує.`);
};

// 2.2

let day = +prompt("Введіть число (1-31):");

switch (true) {
    case day >= 1 && day <= 10:
        console.log(`Це перша декада місяця.`);
        break;
    case day >= 11 && day <= 20:
        console.log(`Це друга декада місяця.`);
        break;
    case day >= 21 && day <= 31:
        console.log(`Це третя декада місяця.`);
        break;
    default:
        console.log(`Невірне число.`);
}