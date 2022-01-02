// implementing singleton pattern with a class (overkill)

let count = 0
let instance;
class Counter {
  constructor() {
    if (instance) {
      throw Error('You cannot create a new instance of the counter object')
    }
    instance = this
  }
  getInstance() {
    return this
  }
  increment() {
    return ++count;
  }
  decrement() {
    return --count;
  }
  getCount() {
    return count;
  }
}

let CounterObject = Object.freeze(new Counter())
function increment(color) {
  CounterObject.increment();
  console.log(color, CounterObject.getCount());
  document.getElementById('result').textContent = CounterObject.getCount();
}

document.getElementById('blue').addEventListener('click', () => increment('blue'));
document.getElementById('red').addEventListener('click', () => increment('red'));