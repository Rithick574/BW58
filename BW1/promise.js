const fetchData = () => {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("data fetched successfully...");
    } else {
      reject("error while fetching data...");
    }
  });
};

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
