const hashtagSearch = /(^|\s)(#[a-z\d-]+)/ig; 
const nameSearch = /(^|\s)([A-ZŚŁŻ][a-ząęółśżźćń]+)/g; 
const specialSignSearch = /(\s)([!@#$%^&*\-=+_?~])(\s)/g; 

// let tekst = "Lorem ipsum #net #lorem ipsum some#thing #js . lorem. # ipsum# ? why not?Andzia Łukasz Wandzia - Pomarańcza. Rzerzucha.bucha";
// console.log([...tekst.matchAll(hashtagSearch)]);
// console.log([...tekst.matchAll(nameSearch)]);
// console.log([...tekst.matchAll(specialSignSearch)]);

module.exports = {
    hashtagSearch : hashtagSearch,
    nameSearch : nameSearch,
    specialSignSearch : specialSignSearch
}