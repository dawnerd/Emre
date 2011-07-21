var emre = require('./emre');

var testObj = {
  'testProp' : [
    {
      'one': 'two'
    },
    {
      'one': 'two'
    }
  ],
  'testPropTwo': {
    'test': 12,
    'testing': 3.14
  }
};

console.log('depth 1');
console.log(emre(testObj, 'testProp'));


console.log('depth 2');
console.log(emre(testObj, 'testPropTwo.testing'));


console.log('set depth 1');
console.log(emre(testObj, 'testProp', ["item", "item2"]));


console.log('set depth 2');
console.log(emre(testObj, 'testPropTwo.test', 21));


console.log('final object');
console.log(testObj);