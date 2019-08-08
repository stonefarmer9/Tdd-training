const fizzbuzz = require('./fizzbuzz');

test("It returns Fizz! for 3", ()=>{
  expect(fizzbuzz(3)).toBe("Fizz!");
});

test("It returns Buzz! for 5", ()=>{
  expect(fizzbuzz(5)).toBe("Buzz!");
})

test("It returns FIZZBUZZ! for 15", ()=>{
  expect(fizzbuzz(15)).toBe("FIZZBUZZ!")
})

test("It returns the number for a non Fizzbuzz number", ()=>{
  expect(fizzbuzz(2)).toBe(2);
})
