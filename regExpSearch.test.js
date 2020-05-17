const {  hashtagSearch, nameSearch, specialSignSearch } = require("./index");

test('Is hashtagSearch catching hashtag when it is first expresion in a string', () => {
    expect('#lorem').toMatch(hashtagSearch);
  });

test('Is hashtagSearch catching hashtag when it is in middle of a sentence', () => {
    expect(
        hashtagSearch.test("Lorem #ipsum")
    ).toBeTruthy();
  });

test('Is hashtagSearch not catching hashtag when it is in middle of a word', () => {
    expect(
        hashtagSearch.test("Lorem lorem#ipsum")
    ).toBeFalsy();
});

test('Is hashtagSearch not catching hashtag when it is just a hashtag with no letters', () => {
    expect(
        hashtagSearch.test("Lorem # ipsum")
    ).toBeFalsy();
});

test('Is nameSearch catching name', () => {
    expect(
        nameSearch.test("Jakub")
    ).toBeTruthy();
});

test('Is nameSearch not catching name, when it is starting with lower case', () => {
    expect(
        nameSearch.test("jakub")
    ).toBeFalsy();
});

test('Is nameSearch not catching name, when it is in a middle of a word', () => {
    expect(
        nameSearch.test("jak tamJakubie?")
    ).toBeFalsy();
});

test('Is nameSearch catching name, when it has polish cases', () => {
    expect(
        nameSearch.test("Żaneta")
    ).toBeTruthy();
});

test('Is specialSignSearch catching special sign, when it is separetad with space', () => {
    expect(
        specialSignSearch.test("Lorem ! ipsum")
    ).toBeTruthy();
});

test('Is specialSignSearch not catching special sign, when it is not separetad with space', () => {
    expect(
        specialSignSearch.test("Lorem. ?ipsum!")
    ).toBeFalsy();
});