## [Return the Missing Element]
### (not using indexOf(i))
### https://www.codewars.com/kata/reviews/52995cff9ce954dc50000a86/groups/61241155cafa9100011b659a

## [Add property to every object in array]

### https://www.codewars.com/kata/reviews/54e8cae858b1db0d2a000148/groups/612413b3dc4df80001537c81


## [Find Your Villain Name]
### https://www.codewars.com/kata/reviews/536c36d47fc09aeb04000006/groups/612417b652154e0001faa3d3


## [Take a Ten Minute Walk]
### Can't save it to codewars - some bug after submit
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
