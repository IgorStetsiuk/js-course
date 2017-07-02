let scanDOM = function () {

    let counter = {
        tags: {},
        classNames: {},
        textsNodes: {}
    };

    function add(dictionary, key) {
        if (dictionary[key]) {
            dictionary[key] += 1;
        } else {
            dictionary[key] = 1;
        }
    }

    function addTags(el) {
        if (el.nodeType === 1) {
            add(counter.tags, el.tagName)
        }
    }

    function addText(el) {
        if (el.nodeType === 3) {
            add(counter.textsNodes, 'TEXT');
        }
    }

    function addClass(el) {
        if (el.classList) {
            for (let i = 0; i < el.classList.length; i++) {
                add(counter.classNames, el.classList[i])
            }
        }

    }

    function filter(el) {
        addTags(el);
        addText(el);
        addClass(el);
    }

    function scan(element) {
        for (let i = element.childNodes.length - 1; i >= 0; i--) {
            let el = element.childNodes[i];
            filter(el);
            if (el.childNodes.length) {
                scan(el);
            }
        }
    }

    function consoleInfo(obj) {
        for (let key in obj.tags) {
            console.log(`Tag ${key} :${obj.tags[key]}`);
        }
        for (let key in obj.textsNodes) {
            console.log('Text nodes :' + obj.textsNodes[key])
        }
        for (let key in obj.classNames) {
            console.log(` Class name --${key}-- count: ` + obj.classNames[key])
        }
    }

    function scanDOM(element) {
        scan(element);
        consoleInfo(counter);
    }

    return {
        scanDOM: scanDOM(document.body)
    }

}();
module.exports=scanDOM;