// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");
//const polybiusModule = [];
describe("polybius()", () => {

  it("thinkful", () => {
    const actual= polybius("thinkful");
    const expected = "4432423352125413"
    expect(actual).to.eql(expected);
  });
  it("should return 3251131343 2543241341", () => {
    const actual= polybius("Hello world");
    const expected = "3251131343 2543241341"
    expect(actual).to.eql(expected);
  });
  it("should return hello world", () => {
    const actual= polybius("3251131343 2543241341", false);
    const expected = "hello world"
    expect(actual).to.eql(expected);
  });
  it("should return th(i/j)nkful", () => {
    const actual= polybius("4432423352125413", false);
    const expected = "th(i/j)nkful"
    expect(actual).to.eql(expected);
  });
  it("should return false", () => {
    const actual= polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  
});