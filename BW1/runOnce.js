function runOnce(){
    let c=0;
    return function(){
        if(c>0){
            console.log("already called the function");
        }else{
            console.log("liked the video");
            c++;
        }
    }
}
runOnce()()
runOnce()()
runOnce()()
runOnce()()

const sub = runOnce()

sub()
sub()
sub()
