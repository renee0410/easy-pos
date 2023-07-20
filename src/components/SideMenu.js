import Logo from '../assets/img/Logo.svg';
// icon
import Icon from '@mdi/react';
import { 
	mdiViewDashboard, // 儀表板
	mdiFileDocumentOutline, // 菜單
	mdiHistory, // 訂單管理
	mdiCashRegister, // 結帳作業
	mdiTimetable, // 班表
	mdiCogOutline, // 設定
	mdiLogout, // 登出
  mdiChevronDoubleLeft, // 向左箭頭
  mdiChevronDoubleRight, // 向右箭頭
} from '@mdi/js';

export function SideMenu() {
	// const [icon, setIcon] = useState([{path: mdiViewDashboard}, {path: mdiFileDocumentOutline}]);
	const icons = [
		{	
			path: mdiViewDashboard,
			linkTitle: '儀表板',
		}, 
		{	
			path: mdiFileDocumentOutline,
			linkTitle: '菜單',
		},
		{	
			path: mdiHistory,
			linkTitle: '訂單管理',
		},
		{	
			path: mdiCashRegister,
			linkTitle: '結帳作業',
		},
		{	
			path: mdiTimetable,
			linkTitle: '班表管理',
		},
		{	
			path: mdiCogOutline,
			linkTitle: '設定',
		},
	];

  return (
		<>
			<aside className="sideMenuArea">
        <div className="sideMenuSwitch">
          <div className="icon">
            <Icon
              path={mdiChevronDoubleLeft}
            ></Icon>
          </div>
        </div>
				<div className="logoArea">
					<img src={Logo} alt="" />
				</div>
				<div className="menuArea">
				{
					icons.map((item) => {
						return (
							<div className='sideMenuBtn' key={item.path}>
								<div className="icon">
									<Icon 
										path={item.path}
									></Icon>
								</div>
								<div className="linkTitle">
									<span>{item.linkTitle}</span>
								</div>
							</div>
						)
					})
				}
				</div>
				<div className="footerArea">
					<hr />
					{/* 登出 */}
					<div className='sideMenuBtn'>
						<div className="icon">
						<Icon 
							path={mdiLogout}
						></Icon>
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