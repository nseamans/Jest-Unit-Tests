const validationFunctions = require('./maths.js');

    // roundAndConvertFunc //

/** roundAndConvertFunc, convert from string and do not round
 * 
 */
test('roundAndConvertFunc, convert from string and do not round ', () =>{

    let result = validationFunctions.roundAndConvertFunc( "40.51", false);
        
        expect(result).toBe(40.51);
});

/** roundAndConvertFunc, convert from string and round
 * 
 */
test('roundAndConvertFunc, convert from string and round up', () =>{

    let result = validationFunctions.roundAndConvertFunc( "40.51", true);
        
        expect(result).toBe(41);
});

/** roundAndConvertFunc, convert from string and round down
 * 
 */
test('roundAndConvertFunc, convert from string and round down', () =>{

    let result = validationFunctions.roundAndConvertFunc( "40.49", true);
        
        expect(result).toBe(40);
});

/** roundAndConvertFunc, convert from string, data does not need to be rounded
 * 
 */
test('roundAndConvertFunc, convert from string, data does not need to be rounded', () =>{

    let result = validationFunctions.roundAndConvertFunc( "40", true);
        
        expect(result).toBe(40);
});

/** roundAndConvertFunc, convert from string, no rounding
 * 
 */
test('roundAndConvertFunc, convert from string, no rounding', () =>{

    let result = validationFunctions.roundAndConvertFunc( "40", false);
        
        expect(result).toBe(40);
});

    // Simple Addition //

/** Simple Addition, result 160
 * 
 */
test('Simple Addition, result 160', () =>{

    let result = validationFunctions.simpleAdd(80, 80);
        expect(result).toBe(160);
});

/** Simple Addition, num one null and result 85
 * 
 */
test('Simple Addition, num one null and result 85', () =>{

    let result = validationFunctions.simpleAdd(null, 85);
        expect(result).toBe(85);
});

/** Simple Addition, num 2 null and result 85
 * 
 */
test('Simple Addition, num 2 null and result 85', () =>{

    let result = validationFunctions.simpleAdd(85, null);
        expect(result).toBe(85);
});

/** Simple Addition, both null result 0
 * 
 */
test('Simple Addition, both null result 0', () =>{

    let result = validationFunctions.simpleAdd(null, null);
        expect(result).toBe(0);
});

/** Simple Addition, both null result 0
 * 
 */
test('Simple Addition, both null result 0', () =>{

    let result = validationFunctions.simpleAdd("15", 15);
        expect(result).toBe(30);
});

/** Simple Addition, num 2 string
 * 
 */
test('Simple Addition, num 2 string', () =>{

    let result = validationFunctions.simpleAdd( 15, "15");
        expect(result).toBe(30);
});

/** Simple Addition, num 2 string with chars
 * 
 */
test('Simple Addition, num 2 string with chars', () =>{

    let result = validationFunctions.simpleAdd( 15, "15px");
        expect(result).toBe(30);
});

/** Simple Addition, both string with chars
 * 
 */
test('Simple Addition, both string with chars', () =>{

    let result = validationFunctions.simpleAdd( "15px", "15px");
        expect(result).toBe(30);
});

/** Simple Addition, both round up at .50
 * 
 */
test('Simple Addition, both round up at .50', () =>{

    let result = validationFunctions.simpleAdd( 40.50, 40.50);
        expect(result).toBe(82);
});

/** Simple Addition, one round under and one round over
 * 
 */
test('Simple Addition, one round under and one round over', () =>{

    let result = validationFunctions.simpleAdd( 40.49, 40.51);
        expect(result).toBe(81);
});

/** Simple Addition, both round under
 * 
 */
test('Simple Addition, both round under', () =>{

    let result = validationFunctions.simpleAdd( 40.49, 40.49);
        expect(result).toBe(80);
});

/** Simple Addition, both round over
 * 
 */
test('Simple Addition, both round over', () =>{

    let result = validationFunctions.simpleAdd( 40.51, 40.51);
        expect(result).toBe(82);
});

    // Simple Subtratction //

/** Simple Subtraction, both values are the same
 * 
 */
test('Simple Subtraction, both values are the same', () =>{

    let result = validationFunctions.simpleSubtract( 40, 40);
        expect(result).toBe(0);
});

/** Simple Subtraction, negative outcome
 * 
 */
test('Simple Subtraction, negative outcome', () =>{

    let result = validationFunctions.simpleSubtract( 40, 80);
        expect(result).toBe(-40);
});

/** Simple Subtraction, positive outcome
 * 
 */
test('Simple Subtraction, positive outcome', () =>{

    let result = validationFunctions.simpleSubtract( 80, 40);
        expect(result).toBe(40);
});

    // Simple Multiplication //

/** Simple Multiplication, positive times a positive
 * 
 */
test('Simple Multiplication, positive times a positive', () =>{

    let result = validationFunctions.simpleMulti( 6, 5);
        expect(result).toBe(30);
});

/** Simple Multiplication, negative times a positive One
 * 
 */
test('Simple Multiplication, negative times a positive One', () =>{

    let result = validationFunctions.simpleMulti( -6, 5);
        expect(result).toBe(-30);
});

/** Simple Multiplication, negative times a positive Two
 * 
 */
test('Simple Multiplication, negative times a positive One', () =>{

    let result = validationFunctions.simpleMulti( 6, -5);
        expect(result).toBe(-30);
});

/** Simple Multiplication, negative times a negative
 * 
 */
test('Simple Multiplication, negative times a negative', () =>{

    let result = validationFunctions.simpleMulti( -6, -5);
        expect(result).toBe(30);
});
 
    // Simple Division //

/** Simple Division, standard division
 * 
 */
test('Simple Division, standard division', () =>{

    let result = validationFunctions.simpleDivide( 25, 5);
        expect(result).toBe(5);
});

/** Simple Division, divide by negative numOne
 * 
 */
test('Simple Division, standard division numOne', () =>{

    let result = validationFunctions.simpleDivide( 25, -5);
        expect(result).toBe(-5);
});

/** Simple Division, divide by negative numTwo
 * 
 */
test('Simple Division, divide by negative numTwo', () =>{

    let result = validationFunctions.simpleDivide( 25, -5);
        expect(result).toBe(-5);
});

/** Simple Division, divide by negative numTwo
 * 
 */
test('Simple Division, divide by negative both', () =>{

    let result = validationFunctions.simpleDivide( -25, -5);
        expect(result).toBe(5);
});

/** Simple Division, divide by zero one
 * 
 */
test('Simple Division, divide by zero one', () =>{

    let result = validationFunctions.simpleDivide( 25, 0);
        expect(result).toBe(0);
});

/** Simple Division, divide by zero two
 * 
 */
test('Simple Division, divide by zero two', () =>{

    let result = validationFunctions.simpleDivide( 0, 25);
        expect(result).toBe(0);
});

/** Simple Division, divide by zero both
 * 
 */
test('Simple Division, divide by zero both', () =>{

    let result = validationFunctions.simpleDivide( 0, 0);
        expect(result).toBe(0);
});