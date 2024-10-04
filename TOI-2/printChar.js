const str = "a4f6k18";

function printChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      let num="" ;
      for (let j = i + 1; j < str.length; j++) {
        if ("0" < str[j] && str[j] <= "9") {
            num+= str[j]
        }else{
            break;
        }
      }
      for(let k=0;k<num;k++){
        console.log(str[i])
      }
    }
  }
}

printChar(str);
