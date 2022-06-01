// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

const trim = () => {
  const name = "       Sourabh kumar          ";
const trimedName =  name.trim();
  console.log(trimedName);
};
const changetoLowerCase = () => {
  const lowerCase = "SoUrABH";
  const lowerValue = lowerCase.toLocaleLowerCase();
  console.log(lowerValue);
};
const changeToUpperCase = () => {
    const upperCase = "Sourabh kumar "
    const upperValue = upperCase.toUpperCase();
    console.log(upperValue);
};


module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase