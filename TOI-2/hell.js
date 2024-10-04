function callback() {
  getUserData((userErr, userData) => {
    if (userErr) {
      console.log(userErr);
    } else {
      getOrders(userData, (orderErr, orderData) => {
        if (orderErr) {
          console.log(orderErr);
        } else {
          getOrderDetails(orderData, (err, orderId) => {
            if (err) {
              console.log(err);
            } else {
              console.log(orderId);
            }
          });
        }
      });
    }
  });
}

callback();


getUserData().then(()=>{
  
})

