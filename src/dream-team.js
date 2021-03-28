const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let teamName = '';
  let sortedSplittedMembers = [];
  let upperCaseWord;

  if (!Array.isArray(members)) {
    return false
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      upperCaseWord = members[i].toUpperCase();
    	sortedSplittedMembers.push(upperCaseWord.split(' ').join(''));
    }
  }
  
  sortedSplittedMembers.sort();

  for (let i = 0; i < sortedSplittedMembers.length; i++) {
    if ((typeof(sortedSplittedMembers[i]) == 'string') &&
    Boolean(sortedSplittedMembers[i]) &&
    (sortedSplittedMembers[i].trim().length > 0)) {
      teamName = teamName + sortedSplittedMembers[i][0];
    }
  }

  return teamName.toUpperCase();
};
