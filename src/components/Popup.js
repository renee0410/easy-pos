import { Button } from "./Button";
import Icon from '@mdi/react';
import { 
  mdiClose,  // 叉叉
} from '@mdi/js';

export function Popup({ showPopup, setShowPopup, setSelectedOption, setComment, setCartQuantity, children, title, footer }) {

  // 關閉彈跳視窗
  function cancelPopup() {
    setShowPopup(false);
    setSelectedOption([]);
    setComment("");
    setCartQuantity(1);
  }

  return (
    <>
      {/* showPopup來判斷顯示與否 */}
      {
        showPopup ? 
          (
            <>
              <div className="mask"></div>
              <div className="popupArea">
                <div className="container">
                  {/* 標題區塊 */}
                  <div className="popupTop">
                    <h3 className="popupTitle">{title}</h3>
                  </div>
                  {/* 中間內容區塊 */}
                  <div className="popupContent">
                    {children}
                  </div>
                  {/* 底部按鈕區塊 */}
                  <div className="popupBottom">
                    {footer}
                  </div>
                  {/* 關閉按鈕 */}
                  <div className="closeBtn" onClick={cancelPopup}>
                    <div className="icon">
                      <Icon path={mdiClose}></Icon>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : 
          ''
      }
    </>
  )
}