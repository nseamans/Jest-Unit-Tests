module.exports = {

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

    /** roundAndConvertFunc
     *  Function that calculates the gradeschool rules for
     *  for rounding. If the remander is equal to or higher 
     *  than .50, the data is rounded up. If the remander 
     *  is below .50, the data is rounded down
     * @param {*} numOne 
     * @param {*} round
     */
    roundAndConvertFunc: function(numOne, round){

        let roundNum = Math.floor(numOne);
        let remander = numOne - roundNum;

        if (this.isType(numOne, 'string') === true){

            numOne = parseFloat(numOne, 10);
        }

        if (round === true){

            if (remander >= 0.50){
                
                numOne = Math.ceil(numOne);

            } else if (remander < 0.50){

                numOne = Math.floor(numOne);

            }

            return numOne;
        } else {

            return numOne;
        }  
    },

    /** nullCheck
     *  Checks to see if numOne or numTwo are null. 
     *  If one or the other is than the variable that
     *  is not null is returned. If both are null,
     *  an integer of 0 is returned.
     * @param {*} numOne
     * @param {*} numTwo
     */
    nullCheck: function(numOne, numTwo){

        if (numOne === null && numTwo === null){

            return 0;
        } 
        else if (numTwo === null){

            return numOne;

        } 
        else if (numOne === null ){

            return numTwo; 

        }

    },
    
    /** simpleAdd
     *  Adds numOne and numTwo
     * @param {*} numOne 
     * @param {*} numTwo 
     */
    simpleAdd: function(numOne, numTwo){

        numOne = this.roundAndConvertFunc(numOne, true);
        numTwo = this.roundAndConvertFunc(numTwo, true);

        if(numOne === null || numTwo === null){
            return nullCheck(numOne,numTwo);

        } else {
            return numOne + numTwo;
        }
        
    },

    /** simpleSubtraction
     *  Subtracts numTwo from numOne
     * @param {*} numOne 
     * @param {*} numTwo 
     */
    simpleSubtract: function(numOne, numTwo){

        numOne = this.roundAndConvertFunc(numOne, true);
        numTwo = this.roundAndConvertFunc(numTwo, true);

        if(numOne === null || numTwo === null){
            return nullCheck(numOne,numTwo);

        } else {
            return numOne - numTwo;
        }

    },

    /** simpleMulti
     *  Multiplies numOne by NumTwo
     *  @param {*} numOne 
     *  @param {*} numTwo
     */
    simpleMulti: function(numOne, numTwo){

        numOne = this.roundAndConvertFunc(numOne, true);
        numTwo = this.roundAndConvertFunc(numTwo, true);

        if(numOne === null || numTwo === null){
            return nullCheck(numOne,numTwo);

        } else {
            return numOne * numTwo;
        }

    },

    /** simpleDivide
     *  Divides numOne by NumTwo
     *  @param {*} numOne 
     *  @param {*} numTwo 
     */
    simpleDivide: function(numOne, numTwo){

        numOne = this.roundAndConvertFunc(numOne, true);
        numTwo = this.roundAndConvertFunc(numTwo, true);

        if(numOne === null || numTwo === null){
            return nullCheck(numOne,numTwo);

        } else {

            if (numOne === 0 || numTwo === 0){
                return 0;
            } else {
               return numOne / numTwo; 
            }
        }

    }

}