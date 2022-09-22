// Мінімум

// Створи об'єкт, що описує автомобіль
// (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
// середня витрата палива на 100 км., водії),
// і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива
// для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві
// необхідно робити перерву на 1 годину. 


let car = {
    producer: 'Volkswagen',
    model: 'Golf VII',
    year: 2019,
    speed: 100,
    fuelTank: 55,
    fuelConsumsion: '6 liters',
    driverOne: 'Anna',
    driverTwo: 'Oleg',
    newDriver: function (driver) {
        this.newDriver = driver;
    },

    checkDriver: function (name) {
        if (name === this.driverOne || name === this.driverTwo || name ===  this.newDriver) {
            return 'Водій існує!';
        } else return 'Немає в базі такого водія!';
    },

    checkTrip: function (distance) {
        let time;
        let fuel;
       if(distance) {
            time = distance / this.speed;
            fuel = (distance / 100) * 6;
            if(time % 4 === 0) {
                time = time + 1;
            }
       } else return 0;

       return `Необхідний час: ${time} год. і палива: ${fuel} літрів.`;
    }
};

////

car.carInform = function() {
    return `${car.producer} ${car.model},
    ${car.year}, avarage speed: ${car.speed},
    fuel tank volume: ${car.fuelTank},
    consumption per 100 kilometers: ${car.fuelConsumsion}`
};
  
console.log(car.carInform());

/////

car.newDriver('Vova');
console.log(car.newDriver);

////

console.log(car.checkDriver('Anna'));
console.log(car.checkDriver('Piter'));
console.log(car.checkDriver('Potter'));

///

console.log(car.checkTrip(400));
console.log(car.checkTrip(500));
console.log(car.checkTrip(600));
console.log(car.checkTrip(800));
console.log(car.checkTrip(1000));
console.log(car.checkTrip(1200));



// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди),
// і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях,
// при зміні однієї частини часу, може змінитися і інша.
// Наприклад: якщо до часу «20:59:45» додати 30 секунд,
// то повинно вийти «21:00:15», а не «20:59:75».
// Також потрібно передбачити можливість того що
// користувач може передати 150 секунд, або 75 хвилин.

let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    timeIs: function () {
        return `Time: ${this.hours}:${this.minutes}:${this.seconds}`
    },

    changeSeconds: function (plusSeconds) {
        if (plusSeconds) {
                this.seconds += plusSeconds;
                if (this.seconds > 59) {
                    this.seconds = 59;
                    this.minutes = Math.floor(plusSeconds % 3600 / 60);
                }
            } 
        return time.timeIs()
    },

    changeMinutes: function (plusMinutes) {
        if (plusMinutes) {
            this.minutes += plusMinutes;
            if (this.minutes > 59) {
                this.minutes = 59;
                this.hours = Math.floor(plusMinutes % 3600 / 60);
            }
        }
        return time.timeIs()
    },

    changeHours: function (plusHours) {
        if (plusHours > 23) {
            return `Невірні дані`
        }
        this.hours = plusHours;
        return time.timeIs()
    }

}


console.log(time.timeIs());
console.log(time.changeSeconds(59));
console.log(time.changeMinutes(59));
console.log(time.changeHours(23));




// Максимум

// Створи об'єкт, що описує звичайний дріб.
// Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не
// зазначені в завданні, для отримання математично
// правильної відповіді)

let fractionOne = {
    numerator: 3,
    denominator: 4
}

let fractionTwo = {
    numerator: 7,
    denominator: 4,

    sum: function () {
        let numberNu = this.numerator + fractionOne.numerator;
        let numberDe;
        if (this.denominator == fractionOne.denominator) {
            numberDe = this.denominator;
        } else numberDe = this.denominator + fractionOne.denominator;

       return `${numberNu} / ${numberDe} = ${(numberNu / numberDe).toFixed(1)}`;
    },

    sub: function () {

        let numberNu = this.numerator - fractionOne.numerator;
        let numberDe;
        if (this.denominator == fractionOne.denominator) {
            numberDe = this.denominator;
        } else numberDe = this.denominator + fractionOne.denominator;

       return `${numberNu} / ${numberDe} = ${(numberNu / numberDe).toFixed(1)}`;
    },

    multi: function () {
        let numberNu = this.numerator * fractionOne.numerator;
        let numberDe = this.denominator * fractionOne.denominator;
        return `${numberNu} / ${numberDe} = ${(numberNu / numberDe).toFixed(1)}`;
    },
 
     divide: function () {
        let numberNu = this.numerator * fractionOne.denominator;
        let numberDe = this.denominator * fractionOne.numerator;
        return `${numberNu} / ${numberDe} = ${(numberNu / numberDe).toFixed(1)}`;
     }

}

console.log(fractionTwo.sum());
console.log(fractionTwo.sub());
console.log(fractionTwo.multi());
console.log(fractionTwo.divide());
