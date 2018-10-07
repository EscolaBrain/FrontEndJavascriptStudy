//pegadinha, pois javascript é fracamente tipado;
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '4' != 4)
console.log('04)', '4' !== 4)
console.log('05)', '4' < 2)
console.log('06)', '4' > 2)
console.log('07)', '4' <= 2)
console.log('08)', '4' >= 2)

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 === d2) //estritamente ve não so valor mais o tipo
console.log('10)', d1 == d2)

console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

