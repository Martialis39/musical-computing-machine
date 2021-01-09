import { useState } from "react";
import { getDates } from "../api";
import { useDispatch } from "react-redux";
import { isFirstEarlierThanSecond } from "../utility";

export const useFetchDates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchDates = (start: string, end: string, earliestDate: string, latestDate: string) => {
    setIsLoading(true);
    const isStartEarlierThanEarliest = isFirstEarlierThanSecond(new Date(start), new Date(earliestDate));
    const isEndLaterThanLatest = isFirstEarlierThanSecond(new Date(latestDate), new Date(end));
    if(isStartEarlierThanEarliest || isEndLaterThanLatest){
      getDates(start, end)
        .then(({holidays}) => {
          dispatch({type: "SET_DATES", 
          payload: [
            isStartEarlierThanEarliest ? start : earliestDate,
            isEndLaterThanLatest ? end : latestDate
          ]
        })
          dispatch({ type: "GET_HOLIDAYS", payload: holidays });
        })
        .catch((err) => {
          setIsLoading(false);
          console.warn("Failed to fetch dates");
        });
      }
  };
  return [isLoading, fetchDates] as const
};
