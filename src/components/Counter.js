import Icon from '@mdi/react';
import { 
  mdiPlus,  // 加
  mdiMinus, // 減
} from '@mdi/js';

export function Counter() {
  return (
    <div className="counterBtn">
    <div className="minusBtn">
        <div className="icon">
          <Icon path={mdiMinus}></Icon>
        </div>
      </div>
      <div className="numBlock">
        <span>10</span>
      </div>
      <div className="plusBtn">
        <div className="icon">
          <Icon path={mdiPlus}></Icon>
        </div>
      </div>
    </div>
  )
}