import { useState, useEffect } from "react";
import { getShifts } from "../services/apiService";

const useFetch = (endpoint, reload, id_user) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (endpoint === "shift") {
          const response = await getShifts(id_user);
          const { data } = response;

          setData(data);

          if (response.status != 200) {
            throw new Error(
              `Request failed with status code: ${response.status}`
            );
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [endpoint, reload, id_user]);

  return { data, error };
};

export default useFetch;
