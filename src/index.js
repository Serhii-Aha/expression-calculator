function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // delete spases
    
    let expr1 = expr.replace(/ /g, '');
    
    // string to array with numbers (number) & string statements

    let arr = [];
    let j = 0;
    let strDig = '';
    let setStatement = new Set(['*', '/', '+', '-', '(', ')']);
    // let n = 0;
    for (let i = 0; i < expr1.length; i++) {
        if (setStatement.has(expr1[i]) === true) {
            if (strDig === '') {
                arr[j] = expr1[i];
                j++;
            } else {
                arr[j] = parseInt(strDig, 10);
                j++;
                arr[j] = expr1[i];
                j++;
                strDig = '';
            }   
        } else {
            strDig = strDig + expr1[i];
        }   
    }
    arr[j] = parseInt(strDig, 10);         
    if (arr.lastIndexOf('(') === -1) {
        return arrCalc(arr);
    }
    let posB = posE = 0;
    let n = 0;
    let arrTemp = [];
    arr.forEach(function (item) {
        if (item === '(') {
            n++;
        }
    })

    if (n > 4) {
    n=4
}

    for (i = 0; i < n; i++) {
        posB = arr.lastIndexOf('(');
        posE = arr.lastIndexOf(')');
        arrTemp = arr.slice(posB + 1, posE);
        arr[posB] = arrCalc(arrTemp);
        arrTemp = [];
        arr.splice(posB + 1, posE - posB);
    }
    return arrCalc(arr);








    function arrCalc(array) {
        
        for (i = 0; i < array.length; i++) {
            if (array[i + 1] === '/' || array[i + 1] === '*') {
                if (array[i + 1] === '/') {
                    array[i] = array[i] / array[i + 2]
                } else {
                    array[i] = array[i] * array[i + 2];
                }
                array.splice(i + 1, 2);
                
                if (i != -1) {
                    i--;
                }
            }
        }
        for (i = 0; i < array.length; i++) {
            if (array[i + 1] === '-' || array[i + 1] === '+') {
                if (array[i + 1] === '-') {
                    array[i] = array[i] - array[i + 2]
                } else {
                    array[i] = array[i] + array[i + 2];
                }
                array.splice(i + 1, 2);

                if (i != -1) {
                    i--;
                }
            }
        }
        return array[0];
    }
}

module.exports = {
    expressionCalculator
}