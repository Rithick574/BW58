// we have 2 collections, like customers and the address,
// cutomer have some customer details like _id,name,email...
// and address collection have their living city and userId,
// and some address details. i want to write a query for show
// the peples who are living in some specific city,like examole kolkata

db.user.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "userId",
      as: "userDetails",
    },
  },
  { $unwind: "userDetails" },
  {
    $match:{
        "userDetails.city":"kolkata"
    },
  },
  {
    $project: {name:1,email:1,"userDetails.city":1}
  }
]);





// database have a collection firstname,lastname,email, i want to show the person who dont have lastname

db.collection.find({$or:[{lastname:{exists:false}},{lastname:null}]},{firstname:1,email:1})
