const apiUrl =
  "https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays";
const apiKey = "f85def01ac3aa60b56493fed74fcefe5";

export const getDates = (startDate: string, endDate: string) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      apiKey: apiKey,
      startDate: startDate,
      endDate: endDate,
    }),
  })
    .then((response) => response.json())
};
