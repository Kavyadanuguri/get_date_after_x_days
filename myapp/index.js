const addDays = require("date-fns/addDays");

const kavya = (days) => {
  const date = addDays(new Date(2020, 7, 22), days);
  return `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`;
};
console.log(kavya(10));
module.exports = kavya;
