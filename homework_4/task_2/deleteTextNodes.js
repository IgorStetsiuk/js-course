/**
 * Created by Igor on 23.06.2017.
 */
let deleteTextNodes = (parent)=>{
    for(let element of  parent.childNodes){
        if(element.nodeType===3){
            parent.removeChild(element);
        }
    }
};

module.exports=deleteTextNodes; 