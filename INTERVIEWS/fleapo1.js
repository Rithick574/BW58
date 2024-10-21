// var twoSum = function(nums, target) {
//    let map = new Map();
//    for(let i=0;i<nums.length;i++){
//     let balance = target-nums[i];
//     if(map.has(balance)){
//         return [map.get(balance),i]
//     }
//     map.set(nums[i],i)
//    }
// };







// 3 collections order customer payment
// payments => enum["payed","failed","pending"],orderId
// customers => name,id,email....
// orders => _id,customerId....

// db.payment.aggregate([
//   {
//     $lookup: {
//       from: "orders",
//       localField: "orderId",
//       foreignField: "_id",
//       as: "orderDetails",
//     },
//   },
//   {
//     $unwind: "$orderDetails",
//   },
//   {
//     $lookup: {
//       from: "customers",
//       localField: "orderDetails.customerId",
//       foreignField: "_id",
//       as: "customerDetails",
//     },
//   },
//   {
//     $unwind: "$customerDetails",
//   },
//   {
//     $match: { status: "failed" },
//   },
//   {
//     $project: {
//       _id: 0,
//       customerName: "$customerDetails.name",
//       orderDetails: {
//         _id: "$orderDetails._id",
//         customerId: "$orderDetails.customerId",
//         totalAmount: "$orderDetails.totalAmount",
//       },
//     },
//   },
// ]);






// //with pendings

// db.payments.aggregate([
//   {
//     $lookup: {
//       from: "orders",
//       localField: "orderId",
//       foreignField: "_id",
//       as: "orderDetails",
//     },
//   },
//   { $unwind: "$orderDetails" },
//   {
//     $lookup: {
//       from: "customers",
//       localField: "orderDetails.customerId",
//       foreignField: "_id",
//       as: "customerDetails",
//     },
//   },
//   { $unwind: "$customerDetails" },
//   { $match: { status: { $in: ["failed", "pending"] } } },
//   {
//     $project: {
//       _id: 0,
//       customerName: "$customerDetails.name",
//       orderDetails: { _id: 1, customerId: 1, totalAmount: 1 },
//     },
//   },
// ]);
