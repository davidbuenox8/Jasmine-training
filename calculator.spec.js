describe("calculator.js", function () {
  let calculator;
  let calculator2;
  describe("Calculator", function () {
    beforeEach(function () {
      //Anything here executes before each spec.
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(function () {
      //Everything inside this block will execute after each specs
    });
    //toBe
    it("should initialize the total", function () {
      expect(calculator.total).toBeFalsy();
      expect(calculator.total).toBe(0);
    });

    //deep equality comparison
    it("can be instantiated", function () {
      jasmine.addMatchers(customMatchers);

      expect(calculator).toBeCalculator();
      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
      expect(calculator.constructor.name /*Calculator*/).toContain("Calc");
    });

    it("instantiates unique object", function () {
      expect(calculator).not.toBe(calculator2);
    });

    it("has common operations", function () {
      expect(calculator.add).toBeDefined();
      expect(calculator.subtract).toBeDefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    it("can override total", function () {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    describe("add()", function () {
      it("should add numbers to total", function () {
        calculator.add(5);
        expect(calculator.total).toBe(5);
      });
      it("returns total", function () {
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(calculator.total).toBeNumber();
        expect(typeof calculator.total).toMatch("number");
        //asymetric matchers -> Not equal in each side

        expect(calculator.total).toEqual(jasmine.anything());
      });
    });

    describe("subtract()", function () {
      it("should subtract numbers from total", function () {
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
      });
    });

    describe("multiply()", function () {
      it("should multiply total by number", function () {
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);
      });

      it("does not handle NaN", function () {
        calculator.total = 20;
        calculator.multiply("a");
        expect(calculator.total).toBeNaN();
      });
    });

    describe("divide()", function () {
      it("should divide total by number", function () {
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
      });
      it("handles divide by zero", function () {
        expect(function () {
          calculator.divide(0);
        }).toThrowError(Error, "Cannot divide by 0");
        expect(function () {
          calculator.divide(0);
        }).toThrow();
      });
    });
    describe("get version", function () {
      it("fetches version from external source", function (done) {
        spyOn(window, "fetch").and.returnValue(
          Promise.resolve(new Response('{ "version": "0.1" }'))
        );
        calculator.version.then(function (version) {
          expect(version).toBe("0.1");
          done();
        });
      });
    });
  });
});
