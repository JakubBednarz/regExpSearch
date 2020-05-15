const hashtagSearch = /(^|\s)(#[a-z\d-]+)/gi; //for testing with jest delete g flag
const nameSearch = /(^|\s)([A-ZŚŁŻ][a-ząęółśżźćń]+)/g; //for testing with jest delete g flag
const specialSignSearch = /(\s)([!@#$%^&*\-=+_?~])(\s)/g; //for testing with jest delete g flag

let tekst = "Lorem ipsum #net #lorem ipsum some#thing #js . lorem. # ipsum# ? why not?Andzia Łukasz Wandzia - Pomarańcza. Rzerzucha.bucha";
console.log([...tekst.matchAll(hashtagSearch)]);
console.log([...tekst.matchAll(nameSearch)]);
console.log([...tekst.matchAll(specialSignSearch)]);


console.log(nameSearch.test("Żaneta"));

module.exports = {
    hashtagSearch : hashtagSearch,
    nameSearch : nameSearch,
    specialSignSearch : specialSignSearch
}