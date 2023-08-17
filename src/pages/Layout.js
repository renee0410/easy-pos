import { Outlet, useNavigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";

import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// 生成共用元件存放環境
export const SearchContext = createContext({});

export function Layout() {
  const navigate = useNavigate();
  // 儲存側邊欄是否收合狀態
  const [isCollapsed, setIsCollapsed] = useState(false);
  // 儲存搜尋值
  const [searchQuery, setSearchQuery] = useState(null);
  

  // 驗證是否登入
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

	return (
    <SearchContext.Provider value={{searchQuery, setSearchQuery}}>
      <div className="layout">
        <div className={`lBlock ${isCollapsed ? "collapsed" : ""}`}>
          {/* 側邊欄選單 */}
          <SideMenu
            setIsCollapsed={setIsCollapsed}
            isCollapsed={isCollapsed}
          ></SideMenu>
        </div>
        <div className={`rBlock  ${isCollapsed ? "collapsed" : ""}`}>
          {/* Header */}
          <Header></Header>
          {/* Main */}
          <Outlet></Outlet>
        </div>
      </div>
    </SearchContext.Provider>
	)
}