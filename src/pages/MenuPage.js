import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Popup } from "../components/Popup";
import { Counter } from "../components/Counter";
// icon
import { 
	mdiLeadPencil, // 修改
  mdiTrashCan  // 刪除
} from '@mdi/js';
// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

export function MenuPage() {
  const tabListData = [
		{
			title: '全部',
		},
		{
			title: '蛋餅',
		},
		{
			title: '漢堡',
		},
		{
			title: '吐司',
		},
		{
			title: '點心',
		},
		{
			title: '鐵板麵',
		},
		{
			title: '沙拉',
		},
		{
			title: '飲料',
		},
	]
  // 將firebase取出的productData存放在productList
  const [ productList, setProductList ] = useState([]);
  // 儲存彈跳視窗顯示或隱藏
  const [ showPopup, setShowPopup ] = useState(false);
  // 儲存所點擊到的商品
  const [ selectedProduct, setSelectedProduct ] = useState(null);
  
  // 初始化時呼叫產品列表api
  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((doc) => {
        // doc為物件，docs為取得doc底下陣列的方法
        const productData = doc.docs.map((data) => {
          // data.id會取出firebase文件的id，再使用展開方法將屬性id塞進productData的陣列裡
          return{ ...data.data(), id: data.id};
        })
        setProductList(productData);
      })
  },[]);
  // console.log(productList)
  // console.log(selectedProduct)

  return (
    <>
      <div className="container menuPage">
        {/* 左側產品列表區塊 */}
        <div className="productListArea">
          {/* 頁籤區塊 */}
          <div className="tabArea">
            {
              tabListData.map((item) => {
                return (
                  <button className="btn tabStyle" key={item.title}>{item.title}</button>
                )
              })
            }
          </div>
          {/* 產品區塊 */}
          <div className="productList">
            {
              productList.map((item) => {
                return (
                  <div 
                    className="productCard" 
                    key={item.id} 
                    onClick={ () => {
                      setShowPopup(true); // 開啟彈跳視窗
                      setSelectedProduct(item);  // 儲存所點擊到的商品
                    }}
                  >  
                    <div className="imgBoxFit">
                      <img src={require(`../assets/img/products/${item.imgUrl}`)} alt="" />
                    </div>
                    <div className="cardBody">
                      <h6 className="cardTitle">{item.title}</h6>
                      <h6 className="cardPrice">{`$${item.price}`}</h6>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
        {/* 右側購物車區塊 */}
        <div className="cartArea">
            {/* 上方訂單資訊區塊 */}
            <div className="cartTop">
            <h2>清單(3)</h2>
            <hr/>
            <div className="info">
              <span className="orderId">訂單編號＃01</span>
              <span className="orderDate">2023-04-10 19:00:00</span>
            </div>
            <hr />
            {/* 內用外帶按鈕區塊 */}
            <div className="togoBtn">
              <Button
                style="btnMd"
                text="內用"
              ></Button>
              <Button
                style="btnMd"
                text="外帶"
              ></Button>
            </div>
            </div>
            {/* 購物車清單區塊 */}
            <div className="cartList">
              <div className="cartProduct">
                <div className="lCartProduct">
                  <span className="productTitle">火腿蛋餅</span>
                  <span className="productDetail">不要醬油+$0</span>
                  <span className="productNum">x1</span>
                </div>
                <div className="rCartProduct">
                  {/* 修改刪除按鈕區塊 */}
                  <div className="modifyBtn">
                    <Button
                      style="btnSm"
                      iconPath={mdiLeadPencil}
                    ></Button>
                    <Button
                      style="btnSm"
                      iconPath={mdiTrashCan}
                    ></Button>
                  </div>
                  <h5 className="productPrice">$40</h5>
                </div>
              </div>
            </div>
            {/* 下方總金額及結帳按鈕區塊 */}
            <div className="cartBottom">
              <hr/>
              <div className="totalAmountArea">
                <h4>Total</h4>
                <h4>$130</h4>
              </div>
              <div className="payBtnArea">
                <Button
                  style="btnLg btnLgSecondary"
                  text="暫存"
                ></Button>
                <Button
                  style="btnLg btnLgPrimary"
                  text="結帳"
                ></Button>
              </div>
            </div>
        </div>
		  </div>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      >
        {/* 上方特製按鈕區塊 */}
        <div className="specialProductArea">
          <h5>特製</h5>
          <div className="specialProductBtn">
            {
              selectedProduct && selectedProduct.options.map((item) => {
                return (
                  <Button
                    style="btnMd"
                    text={`${item.option}+$${item.price}`}
                  ></Button>
                )
              })
            }
          </div>
        </div>
        {/* 備註欄區塊 */}
        <div className="remarkArea">
          <h5>備註</h5>
          <textarea name="" id="remark" cols="30" rows="5" placeholder="請輸入備註"></textarea>
        </div>
        {/* 計數器區塊 */}
        <div className="counterArea">
          <Counter></Counter>
        </div>
      </Popup>
    </>
		
	)
}