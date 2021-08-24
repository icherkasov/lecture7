# Github:
## https://github.com/icherkasov/lecture7
### For tasks 1.3 and 2 please use browser (index.html) because of alerts and prompts
<br></br>
# Task 1.3
## Вывести в консоль числа кратные k, в диапазоне от 1 до n

<br></br>

# Task 2

```
 В ваш подъезд вьехали новые жильцы, которые привезли с собой тараканов.
 Насекомые в поисках еды ползут по вентиляционной шахте.
 За час они поднимаются на 1м, но сразу после этого теряют равновесие и скатываются вниз на 0.5м
 Вопрос: сколько времени у вас есть на покупку ловушек для тараканов, если расстояние от вас до соседей 5м.
 (*) Напишите функцию, которая будет решать эту задачу в общем виде, для любых (speed, slowdown, mine),
 где mine - это высота шахты, speed - скорость таракана за час, slowdown - расстояние падения из-за усталости
```

<br></br>
# CodeWars tasks

## [Return the Missing Element]
### (not using indexOf(i))
### https://www.codewars.com/kata/reviews/52995cff9ce954dc50000a86/groups/61241155cafa9100011b659a

## [Add property to every object in array]

### https://www.codewars.com/kata/reviews/54e8cae858b1db0d2a000148/groups/612413b3dc4df80001537c81


## [Find Your Villain Name]
### https://www.codewars.com/kata/reviews/536c36d47fc09aeb04000006/groups/612417b652154e0001faa3d3


## [Take a Ten Minute Walk]
### Can't save it to codewars - some bug after submit
#### task: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
```
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
```
