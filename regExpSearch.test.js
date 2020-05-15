const {  hashtagSearch, nameSearch, specialSignSearch } = require("./index");

test('Is hashtagSearch catching hashtag when it is first expresion in a string', () => {
  expect(
      hashtagSearch.test("#something")
  ).toBeTruthy();
});

test('Is hashtagSearch catching hashtag when it is in middle of a sentence', () => {
    expect(
        hashtagSearch.test("Aloha #haveANiceDay to every one")
    ).toBeTruthy();
  });

test('Is hashtagSearch not catching hashtag when it is in middle of a word', () => {
    expect(
        hashtagSearch.test("Aloha today#haveANiceDay")
    ).toBe(false);
});

test('Is hashtagSearch not catching hashtag when it is just a hashtag with no letters', () => {
    expect(
        hashtagSearch.test("Aloha # have a nice day")
    ).toBe(false);
});

test('Is nameSearch catching name', () => {
    expect(
        nameSearch.test("Jakub")
    ).toBeTruthy();
});

test('Is nameSearch not catching name, when it is starting with lower case', () => {
    expect(
        nameSearch.test("jakub")
    ).toBe(false);
});

test('Is nameSearch not catching name, when it is in a middle of a word', () => {
    expect(
        nameSearch.test("jak tamJakubie?")
    ).toBe(false);
});

test('Is nameSearch catching name, when it has polish cases', () => {
    expect(
        nameSearch.test("Żaneta")
    ).toBe(false);
});

test('Is specialSignSearch catching special sign, when it is separetad with space', () => {
    expect(
        specialSignSearch.test("Lorem . ipsum")
    ).toBe(false);
});

test('Is specialSignSearch not catching special sign, when it is not separetad with space', () => {
    expect(
        specialSignSearch.test("Lorem. .ipsum")
    ).toBe(false);
});