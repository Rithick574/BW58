function palindrome(num){
    let reversed=0;
    let original = num;
    let reminder;
    while(num > 0){
        reminder = num%10;
        reversed = reversed*10+reminder;
        num = Math.floor(num/10)
    }
    return original === reversed
}
console.log(palindrome(1234321));