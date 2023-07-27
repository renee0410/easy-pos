import Icon from '@mdi/react';
import { 
  mdiPlus,  // 加
  mdiMinus, // 減
} from '@mdi/js';
import { useState } from 'react';

export function Counter() {
  // 儲存計數器數量
  const [ num, setNum ] = useState(0);

  function add() {
    setNum( num + 1 );
  }

  function minus() {
    // 限制計數器為負數
    if (num) {
      setNum( num - 1 );
    }
  }

  return (
    <div className="counterBtn">
    <div className="minusBtn" onClick={minus}>
        <div className="icon">
          <Icon path={mdiMinus}></Icon>
        </div>
      </div>
      <div className="numBlock">
        <span>{num}</span>
      </div>
      <div className="plusBtn" onClick={add}>
        <div className="icon">
          <Icon path={mdiPlus}></Icon>
        </div>
      </div>
    </div>
  )
}