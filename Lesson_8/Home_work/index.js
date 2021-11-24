// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.
// Пример:
// function setTimer(start, end) {
//   while (start > end) {
//     console.log(start);
//     start -= 1;
//   }
//   return `The timer has reached ${end}`;
// }
// console.log(setTimer(30, 20));
// При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// 2. Что выведет функция?
// function f() {
//   console.log(this); // global
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();

// 3. Можем ли мы изменить this дополнительным связыванием? Нет
// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

// 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// alert( bound.test ); // что выведет? почему?
// Будет undefined, т.к. у объекта bound нет key "test"

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk, user.loginFail); //Аргументы функции вызваны без контекста, поэтому выдает ошибку

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user,true), user.login.bind(user, false)); //

// 8.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.
// var elem = { value: "Привет" };

// function func(surname, name) {
//   console.log(this.value + ", " + surname + " " + name);
// }
// func = func.bind(elem);

// //Тут напишите конструкцию с bind()

// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 9. Есть функция которая складывает три числа.
// Выполните каррирование.
// const sum = (a, b, c) => a + b + c
// сonst sum1 = (a) => (b) => (c) => a + b + c;
