const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(array, attribute) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === attribute.toLowerCase();
  });
}

function fuzzyMatch(array, attribute) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase().startsWith(attribute.toLowerCase());
  });
}
const driversList = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(array, attribute) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === attribute.toLowerCase();
  });
}

console.log(findMatching(drivers, "Bobby"));
console.log(fuzzyMatch(drivers, "S"));
console.log(matchName(driversList, "Annette"));
