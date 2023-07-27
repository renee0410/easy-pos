import { Button } from "./Button";

export function Popup({ showPopup, setShowPopup, children, selectedProduct }) {

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
                    <h3 className="popupTitle">{`${selectedProduct.title} $${selectedProduct.price}`}</h3>
                  </div>
                  {/* 中間內容區塊 */}
                  <div className="popupContent">
                    {children}
                  </div>
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