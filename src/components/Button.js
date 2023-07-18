// icons
import Icon from '@mdi/react';
import { 
	mdiLeadPencil, // 修改
  mdiTrashCan  // 刪除
} from '@mdi/js';

// 小按鈕 btnSm
export function BtnSm() {
  return (
    <button className="btnSmStyle">內用</button>
  )
}

// 大按鈕 btnLg
export function BtnLg() {
  return (
    <button className="BtnLgStyle BtnLgPrimary">返回</button>
  )
}

// 修改按鈕
export function ReviseBtn() {
  return (
    <div className='reviseBtnStyle'>
      <div className="icon">
        <Icon path={mdiLeadPencil}></Icon>
      </div>
    </div>
  )
}

// 刪除按鈕
export function DeleteBtn() {
  return (
    <div className='deleteBtnStyle'>
      <div className="icon">
        <Icon path={mdiLeadPencil}></Icon>
      </div>
    </div>
  )
}