
const arr = [1, 2, 3, 4, 5, 'string', true, false, null, undefined, { name: 'John' }, [1, 2, 3]];

console.log(arr[0]); // 1

// Add item to the end of the array
arr.push(10); // [1, 2, 3, 4, 5, 'string', true, false, null, undefined, { name: 'John' }, [1, 2, 3], 10]

// add item to the beginning of the array
arr.unshift(0); // [0, 1, 2, 3, 4, 5, 'string', true, false, null, undefined, { name: 'John' }, [1, 2, 3], 10]

// remove item from the end of the array
arr.pop(); // [0, 1, 2, 3, 4, 5, 'string', true, false, null, undefined, { name: 'John' }, [1, 2, 3]]

// remove item from the beginning of the array
arr.shift(); // [1, 2, 3, 4, 5, 'string', true, false, null, undefined, { name: 'John' }, [1, 2, 3]]

for(const item of arr) {
    console.log(item);
} // 0 1 2 3 4 5 string true false null undefined { name: 'John' } [ 1, 2, 3 ] 10

// map() method creates a new array with the results of calling a provided function on every element in the calling array.
const newArr = arr.map(item => item * 2); // [2, 4, 6, 8, 10, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 20]


// filter() method creates a new array with all elements that pass the test implemented by the provided function.
const filteredArr = arr.filter(item => typeof item === 'number'); // [1, 2, 3, 4, 5, 10]

// reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const reducedArr = arr.reduce((acc, item) => acc + item, 0); // 23

//concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

// slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
const slicedArr = arr.slice(2, 5); // [3, 4, 5]

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
const splicedArr = arr.splice(2, 3); // [3, 4, 5]

// reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const reversedArr = arr.reverse(); // [3, 2, 1]

// sort() method sorts the elements of an array in place and returns the sorted array.
const sortedArr = arr.sort(); // [1, 2, 3]

// every() method tests whether all elements in the array pass the test implemented by the provided function.
const everyItem = arr.every(item => item > 0); // true

// some() method tests whether at least one element in the array passes the test implemented by the provided function.
const someItem = arr.some(item => item > 0); // true

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const includedItem = arr.includes(3); // true

// find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const foundItem = arr.find(item => item === 3); // 3

// findIndex() method returns the index of the first element in the provided array that satisfies the provided testing function.
const foundIndex = arr.findIndex(item => item === 3); // 2

//







// Object
const obj = {
    name: 'John',
    age: 25,
    isStudent: false,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

obj.hasCar = true;
delete obj.age;

// keys() method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
const keys = Object.keys(obj); // ['name', 'isStudent', 'address', 'hasCar']

// values() method returns an array of a given object's own enumerable property values, in the same order as we get with a normal loop.
const values = Object.values(obj); // ['John', false, { city: 'New York', country: 'USA' }, true]

// entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as we get with a normal loop.
const entries = Object.entries(obj); // [['name', 'John'], ['isStudent', false], ['address', { city: 'New York', country: 'USA' }], ['hasCar', true]]

// assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const obj1 = { a: 1, b: 2 };

const obj2 = Object.assign({ c: 3 }, obj1); // { c: 3, a: 1, b: 2 }

