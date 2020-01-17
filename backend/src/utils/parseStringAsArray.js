module.exports = function parseStringAsArray(arrayAsString) {
    //para transformar em array a string digitada pelo usuário, trim remove espaçamento antes e depois
    arrayAsString.split(',').map(tech => tech.trim());
}