// Practice
// • Write a function addProperty(obj, key, value) that adds a new
// property to an object and returns the updated object.
// • Output
// • console.log(addProperty({ name: 'John' }, 'age', 25))
// { name: 'John', age: 25
// console.log(addProperty({}, 'city', 'New York’))
// { city: 'New York }

function addProperty(obj, key, value) {
    obj[key] = value
    return obj
}
console.log(addProperty({ name: 'John' }, 'age', 25))

// • Write a function mergeObject(obj1, obj2) and return merges two
// objects.
// • Output
// • console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
// { name: 'John', age: 25, city: 'New York' }
// • console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
// { name: 'Jane', age: 30, country: 'USA' }

function mergeObject(obj1, obj2) {
    return { ...obj1, ...obj2 }
}
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))

// Write a function getFreqOfWords(sentence) that returns an object with keys representing
// unique words in lowercase and values representing the frequency of occurrences of each
// word with ignore case in the sentence. If the input string is null or undefined, return
// undefined.
// • Output
// • console.log(getFreqOfWords('Today is present and present is your gift'))
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
// • console.log(getFreqOfWords('Do you best just do it’))
// { do: 2, you: 1, best: 1, just: 1, it: 1 }
// • console.log(getFreqOfWords(null)) //undefined
// • console.log(getFreqOfWords(undefined)) //undefined

function getFreqOfWords(sentence) {
  if (sentence == null) return undefined; 

  const words = sentence.toLowerCase().split(/\s+/).filter(Boolean);

  const freq = {};
  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  return freq;
}

// • Write a function extractAndRename(obj) that extracts properties
// name and age from an object, renames them to fullName and
// yearsOld, and returns a new object with these properties.
// • Output
// • console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
// { fullName: 'John', yearsOld: 25 }
// • console.log(extractAndRename({ name: 'Jane', age: 30 }))
// { fullName: 'Jane', yearsOld: 30 }


function extractAndRename(obj) {
  const { name: fullName, age: yearsOld } = obj;
  return { fullName, yearsOld };
}

console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }));
console.log(extractAndRename({ name: 'Jane', age: 30 }));


// Write a function mergeAndDestructure(obj1, obj2) that merges two
// objects using the spread operator, and then destructures the merged
// object to extract specific properties. Return an object with the extracted
// properties.
// • Output
// • console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
// { name: 'John', age: 25 }
// • console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
// { name: 'Jane', age: 30 }

function mergeAndDestructure(obj1, obj2) {
  const merged = { ...obj1, ...obj2 };
  const { name, age } = merged;
  return { name, age };
}
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))