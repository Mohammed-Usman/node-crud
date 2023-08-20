// const x = "1";
// const y = "2";

// console.log(x,y);

// console.log("my name is %s and my age is %d", "Usman", 27);
// console.clear()
// console.count("Usman")
// console.count("A")
// console.count("A")
// console.countReset("A")
// console.count("A")

// const function1 = () => console.trace();

// const function2 = () => function1();

// function2()

const sum = () => console.log(`The sum of 2 and 3 is ${2 + 3}`);
const mult = () => console.log(`The prod of 2 and 3 is ${2 * 3}`);

const timeIt = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");
  console.time("mult()");
  mult();
  console.timeEnd("mult()");
};

timeIt();
