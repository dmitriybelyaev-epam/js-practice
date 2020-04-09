/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
* @param {string}
*/
function reverseString(str) {
  if (typeof str != 'string') {
    return 'This is not a string!';
  }
  return str.split('').reverse().join('');
}

/**
 * return an array of characters names
 */

function getCharactersNames(chars) {
  var AdultSwim = [];
  for (var p in chars) {
    AdultSwim.push(chars[p].name);
  }
  return AdultSwim;
}

/**
 * print (console.log) ids of all characters
 */

function printCharacterNames(chars) {
  for (var p in chars) {
    console.log(chars[p].name);    //the same as ["name"] without .
  }
}

/**
 * return an array of non-human characters
 */
function getNonHumanCharacters(chars) {
  var allNonHumans = [];
  for (var poo in chars) {
    var char = chars[poo];
    if (char.species !== "Human") {
      allNonHumans.push(char);
    }
  } 
  return allNonHumans;
}

/**
 * return info about character named 'Jerry Smith'
 */
function getJerryInfo(chars) {
          var thereYouAre = chars.find (jerry => jerry.name === 'Jerry Smith');
          return thereYouAre;
}



/**
 * check if all characters are human. return true if all, false if not
 */

function isAllHuman(chars) {
  return chars.every(char => char.species === 'Human');
    }


/**
 * check if there are any Fish-Person characters. return true if any, false if not
 */
function isAnyFishPerson(chars) {
 return chars.some(char => char.type === 'Fish-Person');
}

/**
 * 1. Write a method to find an index of minimal item from an array;
* @param {array} arr
*/

function minItem(arr) {
  var minimal = arr[0];
  for (var p = 1; p < arr.length; p++) {
    if (minimal > arr[p]) {
      minimal = arr[p]; 
    }
  }
  return arr.indexOf(minimal);
}



module.exports = {
    reverseString,
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
