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






