
function fizzbuzz(number){
  if (number % 15 === 0)
    {return "FIZZBUZZ!"}
    else if (number % 5 === 0 )
      {return "Buzz!"}
      else if (number % 3 === 0)
      {return "Fizz!"}
      else {
        return number
      }
}

module.exports = fizzbuzz;
