// Write your tests here!
const {caesar} = require('../src/caesar');
const expect = require("chai").expect;

describe("Caesar Shift", () => {
  it("should return 'wklqnixo'" , () => {
    const actual = caesar("thinkful", 3)
    const expected = 'wklqnixo'
    expect(actual).to.equal(expected)
  });
  it("should return qefkhcri", () => {
    let actual = caesar("thinkful", -3)
    let expected ="qefkhcri"
    expect(actual).to.equal(expected)
  });
  it(" should return thinkful", () => {
    let actual = caesar("wklqnixo", 3,false);
    let expected = "thinkful"
    expect(actual).to.equal(expected)
  });
  it("should return bpqa qa i amkzmb umaaiom!",() => {
    let actual = caesar("This is a secret message!", 8)
    let expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.equal(expected)
  }); 
  it("should return this is a secret message! ", () => {
    let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    let expected = "this is a secret message!"
    expect(actual).to.equal(expected)
  }); 
  it("should return false" , () => {
    let actual = caesar("thinkful")
    let expected = false;
    expect(actual).to.equal(expected)
  }); 
  it("should return false", () => {
    let actual = caesar("thinkful", 99)
    let expected = false;
    expect(actual).to.equal(expected)
  }); 
  it("should return false", () => {
    let actual = caesar("thinkful", -26)
    let expected = false;
    expect(actual).to.equal(expected)
  }); 
  
});