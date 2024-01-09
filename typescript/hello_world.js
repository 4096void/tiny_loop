function gree_the_world(person, date) {
    console.log("hello ".concat(person, ", today is ").concat(date.toDateString()));
}
var man = 'Brandan';
gree_the_world(man, new Date());
