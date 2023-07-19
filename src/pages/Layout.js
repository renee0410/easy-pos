import { Outlet } from "react-router-dom"

import { SideMenu } from "../components/SideMenu"
import { Header } from "../components/Header"
import { Button } from "../components/Button"


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
				{/* Main */}
        <Button></Button>
				<Outlet></Outlet>
			</div>
		</div>
	)
}