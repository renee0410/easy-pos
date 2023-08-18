import { useEffect, useContext } from 'react';
import { AppContext } from "../pages/Layout";

// icon
import Icon from '@mdi/react';
import { 
  mdiMagnify, 
  mdiAccount,
} from '@mdi/js';

export function Header() {
  // 向共用環境AppContext取出方法
  const { searchQuery, setSearchQuery } = useContext(AppContext);

	return (
		<>
			<header>
				<div className="searchBar">
					<input 
            type="text" 
            className="searchBarStyle" 
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
					<div className="icon">
						<Icon path={mdiMagnify}/>
					</div>
				</div>
				<div className="userArea">
					<div className="userContent">
						<span className="userId">000123</span>
            <br />
						<span className="userName">王小明 工讀生</span>
					</div>
					<div className="userPhoto">
						<div className="icon">
							<Icon path={mdiAccount}/>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}