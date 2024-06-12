import React from "react";
import Navbar from "../Navbar/Navbar";
import SideMenu from "../SideNavbar/SideNavbar";
import Stats from "../Stats/Stats";
import RecentItems from "../AddedItems/RecentItems";
import ItemsTable from "../ItemsTable/ItemsTable";
import { ImTicket } from "react-icons/im";
function Homepage() {
  return (
    <>
      <Navbar />
      <SideMenu/>
      {/* <Stats/> */}
      <RecentItems />
      <ItemsTable />
    </>
  );
}

export default Homepage;