var replacedNodes = {};

function replaceString(string, replacement, element) {
    var nodes = element.childNodes;
    for (var n = 0; n < nodes.length; n++) {
        replacedList = replacedNodes[string] || [];
        replacedNodes[string] = replacedList;
        if (nodes[n].nodeType == Node.TEXT_NODE && replacedList.indexOf(nodes[n]) < 0) {
            var r = new RegExp(string, 'g');
            if (nodes[n].textContent.search(r) >= 0) {
                nodes[n].textContent = nodes[n].textContent.replace(r, replacement);
                replacedList.push(nodes[n]);
            }
        }
        replaceString(string, replacement, nodes[n]);
    }
}

function makeReplacements() {
    replaceString("El Capitan", "The Capitán", document.body);
    replaceString("Windows", "Windows (lol)", document.body);
    replaceString("Google", "Google (eww)", document.body);
    replaceString("Android", "Android (eww)", document.body);
}

makeReplacements();
setTimeout(makeReplacements, 500);
setTimeout(makeReplacements, 1000);
setTimeout(makeReplacements, 5000);
setTimeout(makeReplacements, 20000);
