import React from "react";
import Header from "./Header";
// import Sidebar from "./SideBar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-4">
      <Header />
      {/* <Sidebar /> */}
      <div className="bg-grey-50 overflow-scroll">
        <div className="max-w-120 mx-auto flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
}

export default AppLayout;
