// another way to do

// module.exports = function parseStringAsArray(arrayAsString) {
//     return arrayAsString.split(',').map(tech => tech.trim());
// }

module.exports = (arrayAsString) => {
    return arrayAsString.split(',').map(tech => tech.trim());
}