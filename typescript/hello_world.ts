function gree_the_world(person: string, date: Date) {
  console.log(`hello ${person}, today is ${date.toDateString()}`);
}

let man = 'Brandan';
gree_the_world(man, new Date());