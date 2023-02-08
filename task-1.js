const cities = ["Москва", "Санкт-Петербург", "Воронеж"];

const transformArrToText = (arr) => {
    return arr.join(", ") + "."
}

console.log(transformArrToText(cities));