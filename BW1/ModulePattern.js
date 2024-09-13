var Module = (function () {
  function privateMethod() {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    //   privateMethod()  
    },
  };
})();

Module.publicMethod();