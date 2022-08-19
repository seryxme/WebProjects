const expect = chai.expect;

mocha.setup("bdd");

// it("I can test", function () {
//   assert.equal(1 + 1, 2);
// });

describe("Sum function test", () => {
  before(() => console.log("Before All"));
  after(() => console.log("after all"));
  beforeEach(() => console.log("before each"));
  beforeEach(() => console.log("after each"));
  it("sum(5, 3) should be 8", () => {
    expect(sum(5, 3)).to.equal(8);
  });

  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equal(4);
  });
});

describe("Sum function test", () => {
  it("2 + 2 should be 4", () => {
    expect(4 + 2).to.equal(6);
  });

  it("sum(12, 8) should be 20", () => {
    expect(sum(12, 8)).to.equal(20);
  });
});
mocha.run();
