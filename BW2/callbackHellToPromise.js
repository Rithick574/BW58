// function fetchData(){
//     getUserData((userErr,userData)=>{
//         if(userErr){
//             console.log(userErr);
//         }else{
//             getOrders(userData.userId,(orderError,orderData)=>{
//                 if(orderError){
//                     console.log(orderError);
//                 }else{
//                     getOrderDetails(orderData[0].orderId,(detailsError,orderDetails)=>{
//                         if(detailsError){
//                             console.log(detailsError);
//                         }else{
//                             console.log(orderDetails);
//                         }
//                     })
//                 }
//             })
//         }
//     })
// };
// fetchData();

// function fetchData() {
//   getUserData()
//     .then((userData) => {
//       return getOrders(userData.userId);
//     })
//     .then((orderData) => {
//       return getOrderDetails(orderData[0].userId);
//     })
//     .then((orderDetails)=>{
//         console.log(orderDetails);
//     }).catch((err)=>{
//         console.error(err);
//     })
// };

// async function fetchData() {
//   try {
//     const userData = await getUserData();
//     const orderData = await getOrders(userData.userid);
//     const orderDetails = await getOrderDetails(orderData[0].orderId);
//     console.log(orderDetails);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();