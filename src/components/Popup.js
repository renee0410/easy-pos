import { Button } from "./Button";
import { useContext, useState } from "react";

export function Popup({ showPopup, setShowPopup }) {

  // 關閉彈跳視窗
  function cancelPopup() {
    setShowPopup(false);
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
                    <span className="popupTitle">原味蛋餅 $25</span>
                  </div>
                  {/* 中間內容區塊 */}
                  <div className="popupContent"></div>
                  {/* 底部按鈕區塊 */}
                  <div className="popupBottom">
                    <Button
                      style="btnLg btnLgSecondary"
                      text="取消"
                      onClick={cancelPopup}
                    ></Button>
                    <Button
                      style="btnLg btnLgPrimary"
                      text="送出"
                    ></Button>
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