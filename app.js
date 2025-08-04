const calc = {
  ...require('./calculadora'),
  ...require('./calculadora2')
};

console.log("soma : ", calc.soma(1,4));