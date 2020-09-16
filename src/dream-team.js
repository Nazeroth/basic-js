const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return !Array.isArray(members) ? false : members.filter((a) => typeof a == "string").map((arr) => arr.trim().substring(0, 1).toUpperCase()).sort().join("");
};
