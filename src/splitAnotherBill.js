const splitTheBill = groupBill => {
  let vals = Object.values(groupBill);
  let avg = vals.reduce((s, v) => s + v) / vals.length;

  const persons = Object.keys(groupBill);
  return persons.reduce((acc, currentPerson) => {
    const individualSpending = groupBill[currentPerson];
    const eachAmountOwed = Number((individualSpending - avg).toFixed(2));
    acc[currentPerson] = eachAmountOwed;
    return acc;
  }, {});
};

module.exports = splitTheBill;
