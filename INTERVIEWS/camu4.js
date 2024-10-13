// 3) Write a function to get a holiday by date range (01-11-2024 to 30-11-2024)
const holidayList = [
  { name: "Pongal", Start: "2024-02-22", End: "2024-02-25" },
  { name: "New Year", Start: "2024-10-25", End: "2024-11-05" },
  { name: "Deepavali", Start: "2024-11-01", End: "2024-11-05" },
  { name: "Christmas", Start: "2024-11-28", End: "2024-12-05" },
];

function checkIsNov(holidayList, startRange, endRange) {
  const start = new Date(startRange);
  const end = new Date(endRange);
  const holidayInRange = holidayList.filter((holiday) => {
    const holidayStart = new Date(holiday.Start);
    const holidayEnd = new Date(holiday.End);
    return holidayStart <= end && holidayEnd >= start;
  });
  return holidayInRange;
}

const startRange = "2024-11-01";
const endRange = "2024-11-30";

console.log(checkIsNov(holidayList, startRange, endRange));
