// Перевірка коректності одного елемента оцінки
const validateMark = (mark) => {
    return typeof mark === "number" && !isNaN(mark) && mark >= 0 && mark <= 100;
};

// Головна функція для підрахунку середнього балу
function calculateAverage(marksArray) {
    if (!Array.isArray(marksArray) || marksArray.length === 0) {
        console.log("Увага: передано порожній масив або невірний тип даних.");
        return;
    }

    let sum = 0;

    for (let mark of marksArray) {
        if (!validateMark(mark)) {
            console.log("Помилка валідації: значення [" + mark + "] не є коректною оцінкою (потрібно число від 0 до 100)!");
            return;
        }
        sum += mark;
    }

    let averageScore = sum / marksArray.length;
    console.log("Середній бал за предмети складає: " + averageScore.toFixed(2));
}

// Тестування роботи скрипта:
let studentGrades = [85, 90, 78, 92, 88, 'A'];
calculateAverage(studentGrades);

let goodGrades = [90, 75, 88, 100, 62];
calculateAverage(goodGrades);
