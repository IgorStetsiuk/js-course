
'use strict';

function consoleRec(array,index) {
    console.log(array[index++]);
    if(array.length>index){
        consoleRec(array,index);
    }
}
consoleRec(['I','can','write','recursion','functions'],0);

