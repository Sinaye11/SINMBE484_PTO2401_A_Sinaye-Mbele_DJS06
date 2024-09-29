// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Log each name and province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Logging each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation: Use map to create a new array of province names in all uppercase.

const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths: Create a new array using map that contains the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//4. Sorting: Use sort to alphabetically sort the provinces. 
const sortedProvinces = [...provinces].sort(); // Using spread to not mutate the original array
console.log(sortedProvinces);

// 5. Filtering Cape: Use filter to remove provinces containing “Cape”. Log the count of remaining provinces.
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);  // Logging count
console.log(nonCapeProvinces);         // Logging remaining provinces

// 6. Finding ‘S’: Create a boolean array using map and some to determine if a name contains the letter ‘S’.
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// 7. Creating Object Mapping: Use reduce to transform the names array into an object mapping names to their respective provinces.
const nameToProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameToProvinceMap);

//Advanced Exercises (Single console.log Execution)

// 8. Log Products
products.forEach(product => console.log(product.product));

// 9. Filter by Name Length
console.log(products.filter(product => product.product && product.product.length <= 5));

// 10. Price Manipulation
console.log(
  products
    .filter(product => !isNaN(Number(product.price)))  // Filter only valid prices
    .map(product => Number(product.price))  // Convert to numbers
    .reduce((total, price) => total + price, 0)  // Sum prices
);

// 11. Concatenate Product Names
console.log(
  products.reduce((acc, product) => acc + product.product + " ", "").trim()
);

// 12. Find Extremes in Prices
const prices = products
  .filter(product => !isNaN(Number(product.price)))  // Only valid prices
  .map(product => Number(product.price));

const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);

console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// 13. Object Transformation
const transformedProducts = products.map(product => ({ name: product.product, cost: product.price }));
console.log(transformedProducts);

