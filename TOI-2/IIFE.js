var x = 23;
(function () {
  var x = 10;
  (function () {
    var x = 20;
    console.log(x);
    x++;
  })();
})();
