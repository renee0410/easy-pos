import Logo from '../assets/img/Logo.svg';

export function SideMenu() {

  return (
		<>
			<aside className='sideMenuArea'>
				<div className="logoArea">
					<img src={Logo} alt="" />
				</div>
				<div className="menuArea">
					{/* 儀表板 */}
					<div className='sideMenuBtn'>
						<div className="icon">
							<i></i>
						</div>
						<div className="linkTitle">
							<span>儀表板</span>
						</div>
					</div>
					{/* 菜單 */}
					<div className='sideMenuBtn'>
						<div className="icon">
							<i></i>
						</div>
						<div className="linkTitle">
							<span>菜單</span>
						</div>
					</div>
				</div>
				<div className="footerArea">
					<hr />
					{/* 登出 */}
					<div className='sideMenuBtn'>
						<div className="icon">
							<i></i>
						</div>
						<div className="linkTitle">
							<span>登出</span>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}