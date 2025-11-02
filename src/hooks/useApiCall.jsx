import axios from "axios";
import { useEffect, useState } from "react";

const useApiCall = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      setItem(response.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log("Error: ", error);
    }
  };

  return {
    isLoading,
    item,
    error,
  };
};

export default useApiCall;
