function stringToDecimal(str, delimiter = " ") {
    let decimalRepresentation = '';
    for (let i = 0; i < str.length; i++) {
        decimalRepresentation += str.charCodeAt(i).toString();
        if (i < str.length - 1) {
            switch (delimiter) {
                case "\\n":
                    decimalRepresentation += "\n";
                    break;
                case "\\t":
                    decimalRepresentation += "\t";
                    break;
                case "":
                    break;
                default:
                    decimalRepresentation += delimiter;
            }
        }
    }
    return decimalRepresentation;
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const decimalRepresentation = stringToDecimal(element.innerHTML);
        element.innerHTML = decimalRepresentation;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const decimalRepresentation = stringToDecimal(element.innerHTML);
        element.innerHTML = decimalRepresentation;
    }
});

*/