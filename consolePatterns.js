//* Some Console_Patterns In JS // 
//! the triangle in console objcet //
function printPattern(range) {
    for(var i=1;i<=range;i++){
    var str="";
    for(var j=1;j<=i;j++){
    str += j+" ";
    }
    console.log(str);
    }
}
printPattern(8);
/*  1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
    1 2 3 4 5 6 
    1 2 3 4 5 6 7 
    1 2 3 4 5 6 7 8 */
//! first pattern (sqare) //
function starsInOneLine(range) {
    for (let i = 1; i <= range; i++) {
        process.stdout.write('*') //todo: printing stars in a one row
    }
}
starsInOneLine(4)
let range = 5;
for (let i = 1; i <= range; i++) {
    for (let j = 1; j <= 1; j++) {
        console.log('* * * * *');
    }
}
console.log(`--------`);
let n = 5;
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n; j++) {
    line += "* ";
    }
    console.log(line);
}


console.log(`---------`);
let sqareInFunctionRange = 6;
function sqareInFunction(rangeOfRows) {
    for (let k = 1; k <= rangeOfRows; k++) {
        var sqareLine = ''
        for (let i = 1; i <= rangeOfRows; i++) {
            sqareLine += '* '
        }
    }
    console.log(sqareLine);
}
sqareInFunction(sqareInFunctionRange)
for (let i = 1; i <= sqareInFunctionRange; i++) {
    sqareInFunction(sqareInFunctionRange)
}

let linee = '';
for (let i = 0; i < 5; i++) {
    for (let i = 1; i <= 1; i++) {
        linee += `${i}`
    }
    console.log(linee);
}
console.log(`---------------`);
//! explaination model for triangle //

function trianlgeModel(range) {
    mainLoop:for (let i = 1; i <= range; i++) { //? this main loop => looping 5 rows
        let line = ''; //? this variable is to make a row content 
        nestedloop:for (let j = 1; j <= i; j++) { //? on each ietiration => '* ' => '* * ' =>> to the end of loop
            line += ` * ` //? =>> the action that occur on every ietiration 
        }
        console.log(line); //? =>> to excute every line by his own self
    }
}
trianlgeModel(5)
console.log(`---------------`);

//! decreased triangle // 

function triangle(range) {
    mainLoop: for (let i = 1; i <= range; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += `* `
        }
        console.log(line);
    }
}
triangle(7)

console.log(`---------------------`);

function decreasedTriangle(mainRangeForLine) {
    for (let i = mainRangeForLine; i >= 1; i--) {
        let mainLine = '';
        for (let i = 1; i <= mainRangeForLine; i++) {
            mainLine += `* `
        }
        console.log(mainLine);
    }
}
decreasedTriangle(6);

console.log(`----------------------------`);

let height = 10; // you can adjust the height of the triangle here

for (let i = 0; i < height; i++) { //? this main loop print 10 rows
    let line = '';
    for (let j = 0; j < height - i - 1; j++) {
        line += '*';
    }
    console.log(line)
}

console.log(`------------------------------`);
//! hill trialnge //

let heightInHill = 10; // you can adjust the height of the triangle here

for (let i = 0; i < heightInHill; i++) {
    let line = '';
    for (let j = 0; j < heightInHill - i - 1; j++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line)
}
console.log(`----------------------`);
//! my learning //
//? reversed triangle
function reversedTriangle(range) {
    for (let i = 1; i <= range; i++) { //todo: print 5 rows
        let line = '' //todo: the main line on each ieteration
        for (let k = 1; k <= range - i; k++)  //todo: decreaces the starts one by one on each operation
            line += '*'
        
        console.log(line); //todo: to excute the loop 
    }
}
reversedTriangle(5);
console.log(`--------------------------`);
//! triangle model //
function trialnge(range) {
    for (let i = 0; i <= range; i++) { //todo: print 5 rows 
        let line = ''
        for (let j = 0; j <= i; j++) { //todo: printing 5 columns for each ieteration by the main loop
            line += j+' '
        }
        console.log(line); //todo: excute each line by his own self
    }
    return ``
}
console.log(trialnge(5));
console.log(`-------------------------------`);
//! reversed triagnle // 
function reversedTriangle(range) {
    for (let i = 0; i <= range; i++) { //todo: this main forloop =>> 5 rows
        let line = '';
        for (let j = 0; j <= range - i; j++) { //todo: this nestedloop =>> assign the full range to the line first then reduce it 1 by each ieteration 
            line += j + ``
        }
        console.log(line);
    }
    return ``
}
console.log(reversedTriangle(5));

for (let i = 0; i < heightInHill; i++) {
    let line = '';
    for (let j = 0; j < heightInHill - i - 1; j++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line)
}
console.log(`-----------------------------------`);

let heightInShape = 10; // you can adjust the height of the triangle here

for (let i = 0; i <= heightInShape; i++) { //todo: this forloop prints 10 rows
    let line = ''
    for (let j = 0; j <= heightInShape - i; j++) {
        line += ' '
    }
    for (let k = 0; k <= heightInShape * 2 + 1; k++) {
        line += '*'
    }
    console.log(line);
}
console.log(`--------------------------------`);
let heightInLeftTriangle = 10; // you can adjust the height of the triangle here

for (let i = 0; i <= heightInLeftTriangle; i++) { //todo: this forloop prints 10 rows
    let line = ''
    for (let k = 0; k < 2 * i +  1; k++) {
        line += '*'
    }
    console.log(line);
}

console.log(`------------------------`);

let heightInHillTwo = 10; // you can adjust the height of the triangle here

for (let i = 0; i <= heightInHillTwo; i++) { //todo: this forloop prints 10 rows
    let line = ''
    for (let j = 0; j <= heightInHillTwo - i; j++) { //todo: this forloop assign the full range to the line and then reduce it by one each ieteration (reverced triangle)
        line += '/'
    }
    for (let k = 0; k < 2 * i + 1; k++) {  //todo: this prints the main triangle in the middle
        line += '*'
    }
     for (let l = 0; l <= heightInHillTwo - i; l++) { //todo: this forloop assign the full range to the line and then reduce it by one each ieteration (reverced triangle)
        line += '\\'
    }
    console.log(line); //! this for loops printed from left to the right
}
console.log(`---------------------------`);
function sqareShape(range) {
    for (let i = 0; i <= range; i++) {
        let line = '*'
        for (let j = 0; j <= i; j++) {
            line += ''
        }
        for (let k = 0; k <= i; k++) {
            line += 'R'
        }
        for (let z = 0; z <= range - i; z++) {
            line += 'R'
        }
        for (let p = 0; p <= 0; p++) {
            line += '*'
        }
        console.log(line);
    }
}
sqareShape(5);