function fetchData(){
getUserData((userErr,userData)=>{
    if(userErr){
        console.log(userErr);
    }else{
        getOrders(userData,(orderError,orderData)=>{
            if(orderError){
                console.log(orderError)
            }else{
                getOrderDetails(orderData[0].orderId,(detailError,OrderDetails)=>{
                    if(detailError){
                        console.log(detailError)
                    }else{
                        console.log(OrderDetails)
                    }
                })
            }
        })
    }
})
};

fetchData();

function fetchData() {
  getUserData()
    .then((userData) => {
      return getOrders(userData);
    })
    .then((orderData) => {
      getOrderDetails(orderData[0].userId);
    })
    .then((orderDetails) => {
      console.log(orderDetails);
    })
    .catch((err) => {
      console.error(err);
    });
}

const fetchData=async()=>{
try {
    const userData = await getUserData();
    const orderData = await getOrders(userData.userid);
    const orderDetails = await getOrderDetails(orderData[0].orderId);
    console.log(orderDetails);
} catch (error) {
    console.error(error)
}
}