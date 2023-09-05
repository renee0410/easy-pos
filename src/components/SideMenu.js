import Logo from '../assets/img/Logo.svg';
import { NavLink } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

export function SideMenu({ isCollapsed, setIsCollapsed }) {
	// const [icon, setIcon] = useState([{path: mdiViewDashboard}, {path: mdiFileDocumentOutline}]);
	const icons = [
		{	
			path: mdiViewDashboard,
			linkTitle: '儀表板',
      link: 'dashboard'
		}, 
		{	
			path: mdiFileDocumentOutline,
			linkTitle: '菜單',
      link: '/'
		},
		{	
			path: mdiHistory,
			linkTitle: '訂單管理',
      link: 'orderList'
		},
		// {	
		// 	path: mdiCashRegister,
		// 	linkTitle: '結帳作業',
    //   link: 'cash'
		// },
		// {	
		// 	path: mdiTimetable,
		// 	linkTitle: '班表管理',
    //   link: 'schedule'
		// },
		// {	
		// 	path: mdiCogOutline,
		// 	linkTitle: '設定',
    //   link: 'setting'
		// },
	];
  const navigate = useNavigate(); 
  

  // 登出功能
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      // An error happened.
    });
  }

  // 收合側邊欄選單
  const toggleSideMenu = () => {
    setIsCollapsed(pre => !pre); // 儲存前一個狀態
  };

  return (
		<>
			<aside className="sideMenuArea">
        <div className="sideMenuSwitch" onClick={toggleSideMenu}>
          <div className={`icon ${isCollapsed ? "rotate" : ""}`}>
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
							<NavLink 
                className={({isActive}) => isActive ? 'sideMenuBtn active' : 'sideMenuBtn'}
                to={item.link} key={item.path}
              >
								<div className="icon">
									<Icon 
										path={item.path}
									></Icon>
								</div>
								<div className="linkTitle">
									<h6>{item.linkTitle}</h6>
								</div>
							</NavLink>
						)
					})
				}
				</div>
				<div className="footerArea">
					<hr />
					{/* 登出 */}
					<div className='sideMenuBtn' onClick={handleLogout}>
						<div className="icon">
						<Icon 
							path={mdiLogout}
						></Icon>
						</div>
						<div className="linkTitle">
							<h6>登出</h6>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}