// icons
import Icon from '@mdi/react';
import { 
	mdiLeadPencil, // 修改
  mdiTrashCan  // 刪除
} from '@mdi/js';

export function Button({ style = 'btnSm', iconPath, text }) {
  return (
    <button className= {`btn ${style}`}>
      { 
        iconPath ? 
          (
            <div className="icon">
              <Icon path={iconPath}></Icon>
            </div>
          ) :
          ''
      }
      { 
        text ? (text) : ''
      }
    </button>
  )
}

// 小按鈕 btnSm
export function BtnSm() {
  return (
    <button className="btn btnSmStyle "></button>
  )
}

// 大按鈕 btnLg
export function BtnLg() {
  return (
    <button className="btn BtnLgStyle BtnLgPrimary">返回</button>
  )
}

// 修改按鈕
export function ReviseBtn() {
  return (
    <button className='reviseBtnStyle'>
      <div className="icon">
        <Icon path={mdiLeadPencil}></Icon>
      </div>
    </button>
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