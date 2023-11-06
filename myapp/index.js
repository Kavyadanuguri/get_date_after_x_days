const addDays = require("date-fns/addDays");

const kavya = (days) => {
  const date = addDays(new Date(2021, 0, 11), days);
  return `${date.getDate()}- ${date.getmMonth() + 1}-${date.getFullYear()}`;
};
module.exports = kavya;
