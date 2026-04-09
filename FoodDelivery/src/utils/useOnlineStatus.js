import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);

  const checkInternet = async () => {
    try {
      await fetch("https://www.google.com", { mode: "no-cors" });
      setOnline(true);
    } catch {
      setOnline(false);
    }
  };

  useEffect(() => {
    checkInternet();

    const interval = setInterval(checkInternet, 1000);

    return () => clearInterval(interval);
  }, []);

  return online;
};

export default useOnlineStatus;
