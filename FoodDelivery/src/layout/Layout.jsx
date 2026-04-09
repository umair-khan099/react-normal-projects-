import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoNetwork from "../pages/NoNetwork";


const Layout = () => {
  const onlineStatus = useOnlineStatus();
 
  if (!onlineStatus) {
    return <NoNetwork />;
  }
  return (
    <div className="bg-[#fffffc] w-full min-h-screen px-10 py-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
