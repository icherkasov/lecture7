// function printNumbers(number, mult) {
//     for (let i = 1; i <= number; i++) {
//         if (i % mult === 0) {
//             console.log(i);
//         }
//     }
//     alert('Numbers printed to console');
// }

// function runTask1_3() {
//     let number = prompt('Insert max value');
//     if (isNaN(number)) {
//         alert(`Value ${number} must be number`);
//         return;
//     }
//     let mult = prompt('Insert multiplicator');
//     if (isNaN(mult)) {
//         alert(`Value ${mult} must be number`);
//         return;
//     }

//     printNumbers(number, mult);
// }


// function calculateTimeLeft(mine, speed, slowdown) {
//     //так как минуты не учитываем - если длина шахты меньше скорости - считаем что времени  0 ( то есть меньше 1 часа)
//     if (mine <= speed) {
//         return 0;
//     }

//     let time = 0;
//     let distance = 0;
//     do {
//         //так как тараканы скатываются после того как преодолели какой-то путь,
//         //выношу скатывание перед просчетом расстояния так как нет смысла скатываться когда добрались до вершиныб
//         //с поправкой на первую итерацию так как считаем что тараканы на чем то стоят и скатываться им некуда
//         if (distance !== 0) {
//             distance -= slowdown;
//         }

//         distance += speed;
//         time++;

//     } while (distance < mine);

//     return time;
// }

// function runTask2() {
//     let mine = prompt('Insert distance');
//     if (isNaN(mine)) {
//         alert(`Value ${mine} must be number`);
//         return;
//     }
//     let speed = prompt('Insert speed');
//     if (isNaN(speed)) {
//         alert(`Value ${speed} must be number`);
//         return;
//     }
//     let slowdown = prompt('Insert slowdown');
//     if (isNaN(slowdown)) {
//         alert(`Value ${slowdown} must be number`);
//         return;
//     }

//     alert("You still have: " + calculateTimeLeft(parseInt(mine), parseFloat(speed), parseFloat(slowdown)) + 'hours to get ready');
// }


function isValidWalk(walk) {
    let xPos = 0;
    let yPos = 0;

    if (walk.length !== 10) {
        return false;
    }

    for (let direction of walk) {
        switch (direction) {
        case 'n':
            yPos++;
            break;
        case 's':
            yPos--;
            break;
        case 'w':
            xPos--;
            break;
        case 'e':
            xPos++;
            break;
        default:
            break;
        }
    }

    return xPos === 0 && yPos === 0;
}



console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) === true);
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])===false);
