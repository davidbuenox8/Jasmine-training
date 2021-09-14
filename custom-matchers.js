const customMatchers = {
  toBeCalculator: function () {
    return {
      compare: function (actual) {
        const result = {
          pass: actual instanceof Calculator, // TODO
          message: "",
        };
        if (result.pass) {
          result.message =
            "Expected " + actual + " NOT to be instance of Calculator";
        } else {
          result.message =
            "Expected " + actual + " to be instance of Calculator";
        }

        return result;
      },
    };
  },
};
