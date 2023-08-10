import { Outlet, useNavigate } from "react-router-dom";

import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function Layout() {
  const navigate = useNavigate();

  // 驗證是否登入
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/login");
    }
  });

	return (
		<div className="layout">
			<div className="lBlock">
				{/* 側邊欄選單 */}
				<SideMenu></SideMenu>
			</div>
			<div className="rBlock">
				{/* Header */}
				<Header></Header>
				{/* Main */}
				<Outlet></Outlet>
			</div>
		</div>
	)
}