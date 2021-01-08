// import { stringToDate } from "../utility";

import { addDays, formatDate } from "../utility";

const apiUrl =
  "https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays";
const apiKey = "f85def01ac3aa60b56493fed74fcefe5";

export const getDates = (startDate: Date, endDate: Date) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      apiKey: apiKey,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    }),
  })
    .then((response) => response.json())
    .then(console.log);
};
