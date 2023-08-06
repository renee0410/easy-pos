// icon
import Icon from '@mdi/react';
import { 
  mdiMagnify, 
  mdiAccount,
} from '@mdi/js';

export function Header() {
	return (
		<>
			<header>
				<div className="searchBar">
					<input type="text" className="searchBarStyle" placeholder="Search"/>
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