const calculateAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }

  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const ageOldest = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const ageCurrent = calculateAge(current.yearOfBirth, current.yearOfDeath);
    return ageCurrent > ageOldest ? current : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
