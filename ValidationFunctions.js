module.exports = {

    /*
        Validation points
        
            first name
            last name
            username
            password
            reenter password
    */

    /** passVal
     *  
     * @param {*} password 
     * @param {*} reenter 
     */
    passVal: function(password, reenter){

        if (
            (this.commonTests(password, "string")  === false) ||
            (this.commonTests(reenter,  "string")  === false) ){

                return false;
        }

        if (password === reenter){
            return true;
        }else{
            return false;
        }
    },

    /** nameVal
     * Evaluates the first, last, and user names on:
     *  1) if they are strings, if not returned false
     *  2) if they are similar, if they are returned false
     *  3) if they are null, if use returned false
     * @param {*} firstname
     * @param {*} lastname
     * @param {*} username
     */
    nameVal: function(firstname, lastname, username){

        if (
            (this.commonTests(firstname, "string")  === false) ||
            (this.commonTests(lastname,  "string")  === false) ||
            (this.commonTests(username,  "string")  === false) ){

                return false;
        }

        if(
            (firstname === lastname) || 
            (firstname === username) || 
            (lastname === username)  ){
            
            return false;
        } else {
        
            return true;
        }

    },

    /** isType
     * confirms if the datatype sent to the method is that 
     * reauested
     * @param {*} data
     * @param {*} datType
     */
    isType: function(data, datType){
        data = typeof data;

        if(data === datType){
            return true;
        }else{
            return false;
        }
    },

    /** isSame 
     *  Checks if two strings are the same
     *  @param {*} stringOne
     *  @param {*} stringTwo 
     */
    isSame: function(stringOne, stringTwo){

        if ((this.commonTests(stringOne, "string") === true) && 
            (this.commonTests(stringTwo, "string") === true) ){

               if(stringOne === stringTwo){
                    return true;
                } else{
                    return false;
                } 

        } else {

            return false;
        }  
    },

    /** isNotNull
     *  Tests if the data is past is null
     * @param {*} data 
     */
    isNotNull: function(data){

        if (data !== null){

            return true;
        }else{
            return false;
        }
    },

    /** commonTests
     *  A method that combines the overall tests that are common in
     *  validation for this project
     * @param {*} data 
     * @param {*} datType
     */
    commonTests: function(data, datType){
        if (
            (this.isNotNull(data) === true) 
                && 
            (this.isType(data, datType) === true)
        ) {
            return true;
        } else {
            return false;
        }
    },

    /** isLength
     * Tests if the data past is the length past in 
     * @param {*} data 
     * @param {*} length 
     */
    isLength: function(data, length){

        if (this.commonTests(data, "string") === true){

            if(data.length <= length){
                return true;
            }else{
                return false;
            }
        } else {

            return true;
        }
    },

    /** isEmail
     *  Tests with a regular expression if the string past is an
     *  e-mail address
     * @param {*} data 
     */
    isEmail: function(data){

        let length = 256;

        if (this.isLength(data, length) === true){

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
                {
                    return true;
                }else{
                    return false;
                }

        } else {
            
            return false;
        }
    },

    /** passwordVal
     *  tests if a password fits givien criteria
     */
    passwordVal: function(data){

        if ((this.commonTests(data, "string") === true)){

            if (/^(?=.*\d).{8,24}$/.test(data))
                {
                    return true;
                }else{
                    return false;
                }

        } else {
            
            return false;
        }

    }
    
}