/**
 * Created by Igor on 23.06.2017.
 */

let deleteTextNodes = (element) => {
    console.log('information ->',element.childNodes);
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
        let el = element.childNodes[i];
        if (el.nodeType === 3) {
            element.removeChild(el);
        } else if (el.childNodes.length) {
            deleteTextNodes(el);
        }
    }
    console.log('information out',element.childNodes);

};

module.exports=deleteTextNodesRec;
