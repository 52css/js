const str = '100000000000';

const r = str.replace(/\B(?=(\d{3})+$)/g, ',')
console.log(r);