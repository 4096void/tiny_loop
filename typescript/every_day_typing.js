// union type means `intersection` of its all members, which isn't cool
function logYourId(x) {
    console.log(x.toUpperCase());
}
// union type as parameter, but return type is not union type
function getFirstThree(x) {
    if (Array.isArray(x))
        return x.slice().join(', ');
    return x.slice(0, 3);
}
function killMan(m) {
    console.log("killed ".concat(m.name, " at ").concat(m.age));
}
// literal type
function alignTxt(dirt) {
    console.log("align text to ".concat(dirt));
}
alignTxt("top");
// type assertion shorthand
function cry(x) {
    console.log(x.toString() + ' is crying');
}
cry(null);
