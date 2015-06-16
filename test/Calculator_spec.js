describe("a calculator", function() {

  it("should have a calculator function", function() {
    expect(Calculator).toBeDefined();
  });

  it("may have an initial value", function() {
    expect(new Calculator(4).getValue()).toEqual(4);
  });

  describe("beginning with 4", function() {
    var calc;
    beforeEach(function() {
      calc = new Calculator(4);
    });


    it("should add 2 and get 6", function() {
      expect(calc.add(2)).toEqual(6);
    });

    it("should add 4 and get 8", function() {
      expect(calc.add(4)).toEqual(8);
    });

  });

  describe("beginning with 5", function() {
    var calc;
    beforeEach(function() {
      calc = new Calculator(5);
    });

    it("should subtract 3 and get 2", function() {
      expect(calc.subtract(3)).toEqual(2);
    });

    it("should subtract 6 and get -1", function() {
      expect(calc.subtract(6)).toEqual(-1);
    });
  });
});
