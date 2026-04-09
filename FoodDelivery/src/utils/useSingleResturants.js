import { useEffect, useState } from "react";

const useSingleResturants = (resId) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.eatsure.com/v1/api/get_all_products/brand_id/${resId}/store_id/10173/source_id/10`,
      );
      const json = await res.json();
      setCollections(json?.data?.collections || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { collections, setLoading };
};

export default useSingleResturants;
