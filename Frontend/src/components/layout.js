import React from "react";
import { Outlet } from "react-router-dom";
import BottomSheet from "./bottomSheet";

export default function Layout() {
  return (
    <div>
      <main className="layout">
        <Outlet />
      </main>
      <BottomSheet />
    </div>
  );
}
