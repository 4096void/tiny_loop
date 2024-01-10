function gree_the_world(person: string, date: Date) {
  console.log(`hello ${person}, today is ${date.toDateString()}`);
}

let man = 'Brandan';
gree_the_world(man, new Date());
gree_the_world(42);

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

function printName(obj: { first: string; last?: string }) {
  console.log(obj.last?.toUpperCase());
}

printName({ laast: 'good' });
