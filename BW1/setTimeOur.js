function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// a()

function b() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// b()

//using var and closures
function c() {
  for (var i = 0; i < 5; i++) {
   (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i)
  }
}

c();
