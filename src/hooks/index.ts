import { useState } from "react";
import { getDates } from "../api";
import { useDispatch } from "react-redux";

export const useFetchDates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchDates = (start: string, end: string) => {
    setIsLoading(true);
    getDates(start, end)
      .then(({holidays}) => {
        dispatch({ type: "GET_HOLIDAYS", payload: holidays });
      })
      .catch((err) => {
        setIsLoading(false);
        console.warn("Failed to fetch dates");
      });
  };
  return [isLoading, fetchDates] as const
};
