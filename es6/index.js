/**
 * Create a function that performs a pivot operation, on an array of objects, converting it from long to wide format based on specified keys.
const longFormatData = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];
// const wideFormatData = pivotLongToWide(longFormatData, keys);
// console.log(wideFormatData);
output: {
  id: [ 1, 2, 3 ],
  name: [ 'Alice', 'Bob', 'Charlie' ]
}
 */

const longFormatData = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];
const keys = ["id", "name"];
const wideFormatData = (longFormatData, keys) => {
  const returnObject = keys.reduce((acc, values) => {
    return { ...acc, [values]: [] };
  }, {});
  console.log(returnObject);
  for (let i = 0; i < longFormatData.length; i++) {
    for (const [key, value] of Object.entries(longFormatData[i])) {
      if (keys.includes(key)) {
        returnObject[key].push(value);
      }
    }
  }
  return returnObject;
};

console.log(wideFormatData(longFormatData, keys));
