/* 
    console.log('Привет, \nконсоль!\' \\')
    \n - Новая строка
    \ - Экранирование элемента
    document.write('Написал текст в html')
    p.innerHTML/Text - вывод в html
    const name = 'Алексей'; - Константа
        let age = 27; - переманная вместо var(Устарела)
    parseInt - Преобразует строку в число
        let name = prompt('Как вас зовут?'),
            age = parseInt(prompt('Сколько вам лет?')), // parseInt("24") == 24
            ageNext = age +1;
        console.log(ageNext);
    isNaN(age) - Проверка информации на не-Номер
    let bool = true; // false - Boolean
    = - Присвоить
    == - Равно (значения в ячейке)
    === - Равно полностью (значения + тип данных)
    Null - Пустая ячейка
    Infinity - Бесконечность
    undefined - Неиспользованна ячейка
    'use strict'; - Испольковать жесткий формат правил
    Пример задачки "Если - то":
            let pass = parseInt(prompt('Пароль?'));
        if (pass === 123) {
            console.log('Пароль верный!') // Что сделать если Да
        } else {
             console.log('Пароль не верный!')// Что сделать если Нет
        }
    +prompt('Сколько вам лет?') - +в начале используется вместо parseInt
    if (isNaN(age)) {
        alert('Вы ввели не число'); - проверка с оповещением об ошибке(ввели буквы а не число)
*/

'use strict';