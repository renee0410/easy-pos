// icon
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

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
						<div className="userId"></div>
						<div className="userName"></div>
					</div>
					<div className="userPhoto">
						<i></i>
					</div>
				</div>
			</header>
		</>
	)
}