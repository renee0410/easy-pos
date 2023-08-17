import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function Layout() {
  const navigate = useNavigate();
  // 儲存側邊欄是否收合狀態
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 驗證是否登入
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

	return (
		<div className="layout">
			<div className={`lBlock ${isCollapsed ? "collapsed" : ""}`}>
				{/* 側邊欄選單 */}
				<SideMenu
          setIsCollapsed={setIsCollapsed}
        ></SideMenu>
			</div>
			<div className={`rBlock  ${isCollapsed ? "collapsed" : ""}`}>
				{/* Header */}
				<Header></Header>
				{/* Main */}
				<Outlet></Outlet>
			</div>
		</div>
	)
}