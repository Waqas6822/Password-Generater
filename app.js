const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numSet="1234567890";
const simbleSet="!@#$%^&*({[|/?~"

const passBox=document.getElementById("pass-box");
const totalChar=document.querySelector("#total-char");
const lowerInput=document.querySelector("#lower-case");
const upperInput=document.querySelector("#upper-case");
const numInput=document.querySelector("#numbers");
const simbInput=document.querySelector("#symbols");



const getRandomData=(dataSet)=>{
   return dataSet[Math.floor(Math.random()* dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numInput.checked) {
        password += getRandomData(numSet)
    }
    if (simbInput.checked) {
        password += getRandomData(simbleSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password, totalChar.value);
}
generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)

function truncateString(str,num){

    if(str.length>num){
        let subStr = str.substring(0, num)
        return subStr;
    }else{
        return str;
    }
}


