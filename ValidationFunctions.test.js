const validationFunctions = require('./ValidationFunctions.js');

    // LENGTH TESTS //

/** Under Length
 * tests if the string is under length
 * result true
 */
test('(Length) Under length', () =>{

    let result = validationFunctions.isLength('m', 50);
        expect(result).toBe(true);
});

/** Empty String
 *  tests if the string exists but is empty
 *  result true
 */
test('(Length) Empty String', () =>{

    let result = validationFunctions.isLength('', 50);
        expect(result).toBe(true);
});

/** Null String
 *  Tests if past string is null
 *  result True
 */
test('(Length) Null String', () =>{
    
    let result = validationFunctions.isLength(null, 50);
        expect(result).toBe(true);
});

/** At length
 *  Test to see behavior if the string is 50 chars long
 */
test('(Length) At length', () =>{

    let result = validationFunctions.isLength('VISION____VISION____VISION____VISION____VISION____', 50);
        expect(result).toBe(true);
});

/** Over length
 *  Tests Behavior if over 50 chars
 *  result false
 */
test('(Length) Over length', () =>{

    let result = validationFunctions.isLength('VISION____VISION____VISION____VISION____VISION____VISION____', 50);
        expect(result).toBe(false);
});

    // BOTH STRINGS ARE THE SAME //

/** Both strings are the same length
  * Both strigns are exactly the same
  * result true
  */ 
test('(Same String) Both strings are the same length', () =>{
    
    let result = validationFunctions.isSame("String is equal","String is equal");
        expect(result).toBe(true);
});

/** Both strings are different, both different
  * All data is the a string but both strings are different
  * result false
  */ 
test('(Same String) Both strings are different, both different', () =>{
    
    let result = validationFunctions.isSame("String is equal","String is not equal");
        expect(result).toBe(false);
});

/** Both strings are different, same length
  * both strings are the same length but different chars
  * result false
  */ 
test('(Same String) Both strings are different, same length', () =>{
    
    let result = validationFunctions.isSame("same","test");
        expect(result).toBe(false);
});

/** Both strings are the same, but both number types
  * The data is the same but the data is numerical instead of a string
  * result false
  */ 
test('(Same String) Both strings are the same, but both number types', () =>{
    
    let result = validationFunctions.isSame( 6 , 6 );
        expect(result).toBe(false);
});

/** Both strings are the same, but the types of data are different
  * The data is the same but of different data types.
  * result false
  */ 
test('(Same String) Both strings are the same, but the types of data are different', () =>{
    
    let result = validationFunctions.isSame( 6 , "6" );
        expect(result).toBe(false);
});

    // NULL OBJECT TESTS //

/** Is not null
 *  Tests data with chars
 *  result true
 */
test('(Null) Is not null', () =>{

    let result = validationFunctions.isNotNull('works');
        expect(result).toBe(true);
});

/** Is null
 *  Tests if the past data is null
 *  result false
 */
test('(Null) Is null', () =>{

    let result = validationFunctions.isNotNull(null);
        expect(result).toBe(false);
});

/** Empty string
 *  The dast data exists but is empty
 *  result true
 */
test('(Null) Empty string', () =>{

    let result = validationFunctions.isNotNull('');
        expect(result).toBe(true);
});

    // IS AN E-MAIL ADDRESS TESTS //

/** Is Email
 *  Tests a real E mail address
 *  result true
 */
test('(E-Mail) Is Email', () =>{

    let result = validationFunctions.isEmail('nseamans@radford.edu');
        expect(result).toBe(true);
});

/** Is Email with one char
 *  Email has 1 char
 *  result true
 */
test('(E-Mail) Is Email with one char', () =>{

    let result = validationFunctions.isEmail('1@google.com');
        expect(result).toBe(true);
});

/** Is not Email, no address
 *  tests data past with no E mail identifiers
 *  result false
 */
test('(E-Mail) Is not Email, no address', () =>{

    let result = validationFunctions.isEmail('nseamans');
        expect(result).toBe(false);
});

/** Is not Email, forgot site name
 *  Tests if the address past has no site name
 *  result false
 */
test('(E-Mail) Is not Email, forgot site name', () =>{

    let result = validationFunctions.isEmail('nseamans@.edu');
        expect(result).toBe(false);
});

/** Is not Email, forgot domain suffix
 *  Tests if the string has no domain suffix
 *  result false
 */
test('(E-Mail) Is not Email, forgot domain suffix', () =>{

    let result = validationFunctions.isEmail('nseamans@radford');
        expect(result).toBe(false);
});

/** Is not Email, string empty
 *  Tests if the string exists but is empty
 *  result false
 */
test('(E-Mail) Is not Email, string empty', () =>{

    let result = validationFunctions.isEmail('');
        expect(result).toBe(false);
});

/** Is not Email, data is null
 *  Tests  if the string pasts is null
 *  result false
 */
test('(E-Mail) Is not Email, data is null', () =>{

    let result = validationFunctions.isEmail(null);
        expect(result).toBe(false);
});

    //  DATA IS A STRING OR NUMBER //

/** Is string
 *  Checks to see if the data past is a string
 */
test('(type) Is string', () =>{

    let result = validationFunctions.isType("Is String", "string");
        expect(result).toBe(true);
});

/** Is not string
 *  Checks to see if past data is not a string
 */
test('(type) Is not string', () =>{

    let result = validationFunctions.isType(6, "string");
        expect(result).toBe(false);
});

/** Is a Number
 * Checks to see if the type is a number
 */
test('(type) Is a number', () =>{

    let result = validationFunctions.isType(6, "number");
        expect(result).toBe(true);
});

/** Is not Number
 * Checks to see if the type is not a number
 */
test('(type) Is not number', () =>{

    let result = validationFunctions.isType(6, "string");
        expect(result).toBe(false);
});

    // PASSWORD TESTS //

/** Password is correct
 *  Checks to see if the password has at least one numeric value 
 *  and is between 8 and 24 chars. 
 *  result true
 */
test('(password) Password is correct', () =>{

    let result = validationFunctions.passwordVal("Vision@4567");
        expect(result).toBe(true);
});

/** Password is correct, at 8 chars
 *  Checks to see if the password has at least one numeric value 
 *  and is 8 chars long.
 *  result true
 */
test('(password) Password is correct, at 8 chars', () =>{

    let result = validationFunctions.passwordVal("Vision@4");
        expect(result).toBe(true);
});

/** Password is correct, at 24 chars
 *  Checks to see if the password has at least one numeric value 
 *  and is 24 chars long.
 *  result true
 */
test('(password) Password is correct, at 8 chars', () =>{

    let result = validationFunctions.passwordVal("Vision@4Vision@4Vision@4");
        expect(result).toBe(true);
});

/** Password is correct, at over 24 chars
 *  Checks to see if the password has at least one numeric value 
 *  and is over 24 chars long.
 *  result false
 */
test('(password) Password is correct, at 8 chars', () =>{

    let result = validationFunctions.passwordVal("Vision@4Vision@4Vision@4Vision@4");
        expect(result).toBe(false);
});

/** Password is not correct, no Numeric value
 *  tests if the password does not have a numeric value
 *  result false
 */
test('(password) Password is not correct, no Numeric value', () =>{

    let result = validationFunctions.passwordVal("Visionasdf");
        expect(result).toBe(false);
});

/** Password is correct, all numerics
 *  tests berhavior if password has all numeric values
 *  result true
 */
test('(password) Password is correct, all numerics', () =>{

    let result = validationFunctions.passwordVal("123456789");
        expect(result).toBe(true);
});

/** Password is not correct, short with numeric value
 *  Tests if the password is to short but contains a numeric value
 *  result false
 */
test('(password) Password is not correct, short with numeric value', () =>{

    let result = validationFunctions.passwordVal("V6");
        expect(result).toBe(false);
});

/** Password is not correct, short 
 *  Tests if the password is to short 
 *  result false
 */
test('(password) Password is not correct, short', () =>{

    let result = validationFunctions.passwordVal("V6");
        expect(result).toBe(false);
});

/** Password is not correct, empty string 
 *  Tests if the password string is empty
 *  result false
 */
test('(password) Password is not correct, empty string', () =>{

    let result = validationFunctions.passwordVal("");
        expect(result).toBe(false);
});

/** Password is not correct, data is a number 
 *  Tests if the password a number and not a string
 *  result false
 */
test('(password) Password is not correct, data passed is a number', () =>{

    let result = validationFunctions.passwordVal(6);
        expect(result).toBe(false);
});

/** Password is not correct, data is a number 
 *  Tests if the password is passed a null value
 *  result false
 */
test('(password) Password is not correct, null value passed', () =>{

    let result = validationFunctions.passwordVal(null);
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal) All strings, Everything is unique', () =>{

    let result = validationFunctions.nameVal('Nicholas','Seamans','nseamans');
        expect(result).toBe(true);
});

/**
 * 
 */
test('(nameVal) All strings, first and last name is the same', () =>{

    let result = validationFunctions.nameVal('Seamans','Seamans','nseamans');
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal) All strings, everything is the same', () =>{

    let result = validationFunctions.nameVal('Seamans','Seamans','Seamans');
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal), All strings, last and username the same', () =>{

    let result = validationFunctions.nameVal('Seamans','nseamans','nseamans');
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal) All strings, first and username the same', () =>{

    let result = validationFunctions.nameVal('nseamans','Seamans','nseamans');
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal) firstname is not a string', () =>{

    let result = validationFunctions.nameVal( 10,'Seamans','nseamans');
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal) lastname is not a string', () =>{

    let result = validationFunctions.nameVal( 'Nicholas', 10 ,'nseamans');
        expect(result).toBe(false);
});

/**
 * 
 */
test('(nameVal) username is not a string', () =>{

    let result = validationFunctions.nameVal( 'Nicholas','Seamans', 10 );
        expect(result).toBe(false);
});

