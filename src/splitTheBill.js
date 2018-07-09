const splitTheBill = groupSpending => {
  const persons = Object.values(groupSpending);
  const eachToPay = persons.reduce((accumulator, eachSpending) => {
    return accumulator + eachSpending;
  }, 0) / persons.length;

  const balance = {};
  Object.keys(groupSpending).forEach(person => {
    // balance[person] = +(groupSpending[person] - eachToPay).toFixed(2);
    balance[person] = Number((groupSpending[person] - eachToPay).toFixed(2));
  });
  return balance;
};

module.exports = splitTheBill;



