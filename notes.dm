//suite = Group of specs(tests)
//specs = set of expectations
//to disable a spec ---> add an x before it or describe for the whole suite





//Matcher 
- A function that implements a boolean comparison 
between the actual value and the expected value.
- It is responsible for reporting to jasmine if the expectation is true or false.

inside matchers:
//toBe
expect(/*actual value*/calculator.total).toBe(expected value - 5) 
--> true/false

//Deep equality comparison(.toEqual()):
- Equal keys and Equal values
- {key: 'something'} === {key: 'something'} --> true

//toBeTruthy() / toBeFalsy()

Truthy -> true, number, string, {}, [] 
Falsy -> false, 0, "", NaN, null, undefined


//toBeUndefined() / toBeDefined()
undefined - Global Property
- It is primitive --> Data that is not an object and has no mehtods.
- A value that is automatically assigned to 
variables that have been just declared.

other matches:
//toBeNull() - toBeNaN() - toContain(---) 
//toThrow()/toThrowError()
//toMatch(regex)


-------

Organizing your specs
 - describe -> group specs /suites
 - Through naming convention -> Create a spec file with 
 the same name that matches the source file you are unit testing.
 calculator.js --> calculator.specs.js
 - Keep the folder structured
 - Nesting suites

 ------

