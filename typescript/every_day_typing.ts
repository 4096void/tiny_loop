// union type means `intersection` of its all members, which isn't cool
function logYourId(x: string | number) {
  console.log(x.toUpperCase());
}

// union type as parameter, but return type is not union type
function getFirstThree(x: Array<number> | string): string {
  if (Array.isArray(x)) return x.slice().join(', ');
  return x.slice(0, 3);
}

// aliases, make typing cleaner
type Man = {
  name: string;
  age: number;
};

function killMan(m: Man) {
  console.log(`killed ${m.name} at ${m.age}`);
}

// literal type
function alignTxt(dirt: "left" | "center" | "right") {
  console.log(`align text to ${dirt}`);
}

alignTxt("top");

// type assertion shorthand
function cry(x?: number | null) {
  console.log(x!.toString() + ' is crying');
}

cry(null);