import { SideMenu } from "../components/SideMenu"
import { Header } from "../components/Header"

// 測試
import { Tab } from "../components/Button"


export function Layout() {
	return (
		<div className="layout">
			<div className="lBlock">
				{/* 側邊欄選單 */}
				<SideMenu></SideMenu>
			</div>
			<div className="rBlock">
				{/* Header */}
				<Header></Header>
				{/* Contain */}
			</div>
		</div>
	)
}