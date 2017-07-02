let prepend = require('./task_1/prepend.js');
let deleteTextNodes = require('./task_2/deleteTextNodes.js');
let deleteTextNodesRec = require('./task_3/deleteTextNodesRec.js');
let scanDOM = require('./task_4/nodeCounter.js');


console.info('============= prepend ===============');
let divNode = document.createElement('form');
let container = document.querySelector('.container');
prepend(container,divNode);

console.info('============= deleteTextNodes ===============');
let parent = document.querySelector('.container');
deleteTextNodes(parent);

console.info('============= deleteTextNodesRec ===============');
let element = document.querySelector('.container');
deleteTextNodesRec(element);

console.info('============= scanDOM ===============');
let element = document.body;
scanDOM(element);