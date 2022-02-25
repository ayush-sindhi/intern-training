const sum = (...args) => {
    return args.reduce((curr, prev) => curr + prev, 0);
  };
  
  const sub = (a, b) => {
    return a - b;
  };
  
  const mul = (...args) => {
    return args.reduce((curr, prev) => curr * prev, 1);
  };
  
  const div = (a, b) => {
    return a / b;
  };
  
  const isprime = (a) => {
    for (i = 2; i <= a / 2; i++) {
      if (a % i === 0) return false;
    }
    return true;
  };
  
  module.exports = arithmatic = { sum, sub, mul, div, isprime };