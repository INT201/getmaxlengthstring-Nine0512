const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if (arrayOfString == null || undefined){
    return undefined
  }else{
    let maxlength = arrayOfString[0].length
    let test = []
    for (let i = 0; i < arrayOfString.length; i++){
      if(arrayOfString[i].length>maxlength){
        maxlength = arrayOfString[i].length
      }
    }
    for(i = 0; i < arrayOfString.length; i++){
      if(arrayOfString[i].length == maxlength){
        test.push(arrayOfString[i])
      }
    }
    return test
  }
}
// console.log(getMaxLengthString(['hello','hi','hrter']))
module.exports = getMaxLengthString
