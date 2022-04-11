/********************
* Echauffement
*********************/

/*
Créez un programme qui affiche un rectangle dans le terminal.

Exemples d’utilisation:
$ > python exo.py 5 3
o---o
|   |
o---o

$ > python exo.py 5 1
o---o

$ > python exo.py 1 1
o

Gérer les problèmes potentiels d’arguments.
*/

/******************
*    FUNCTIONS
******************/
function squareThat(width, height){
    let result = "";
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            // 'o' if (0,0)|(H,0)|(H,W)|(0,W)
            // '-' if (0,x)|(H,x) && 0 < x < W
            // '|' if (y,0)|(y,W) && 0 < y < H
            if( ( (i === 0) || (i === height-1) ) && ( (j === 0) || ( j === width-1) ) ){
                result += 'o';
            } else if( (i === 0) || (i === height-1) && ((j > 0) && (j < width-1)) ){
                    result += '-';
                } else if( ( (j === 0) || ( j === width-1) ) && (i > 0) && ( i < height-1 ) ){
                    result += '|';
                } else {
                    result += ' ';
                }
            }
        result += '\n';
    }
    return result;
}

/******************
*  ERROR HANDLING
******************/
const errorMessage = new Error("error");

function onlyTwoArguments(args) {
    return (args.length == 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args) {
    let testResult = 1;
    if (!onlyTwoArguments(args)) {
        testResult = errorMessage;
    }
    return testResult;
}

/******************
*     PARSING
******************/
let args = process.argv.slice(2);
let checkResult = checkArgumentForError(args);
let result = "error";

/******************
*      MAIN
******************/
if (checkResult !== 1) {
    result = checkResult.message;
} else {
    result = squareThat(args[0], args[1]);
}
/******************
*     DISPLAY
******************/
console.log(result);