/**
 * Created by Igor on 23.06.2017.
 */
let prepend = (container,newElement) => {
    container.insertBefore(newElement,container.children[0]);
};

let divNode = document.createElement('form');
let container = document.querySelector('.container');
prepend(container,divNode);

module.exports=prepend;