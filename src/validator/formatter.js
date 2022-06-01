 // trim function 
const trim = () => {
  const name = "       Sourabh kumar          ";
const trimedName =  name.trim();
  console.log(trimedName);
};
// lowerCase function 
const changetoLowerCase = () => {
  const lowerCase = "SoUrABH";
  const lowerValue = lowerCase.toLocaleLowerCase();
  console.log(lowerValue);
};
// upperCase function 
const changeToUpperCase = () => {
    const upperCase = "Sourabh kumar "
    const upperValue = upperCase.toUpperCase();
    console.log(upperValue);
};

// export all modules


module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase