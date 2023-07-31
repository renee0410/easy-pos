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
import { collection, getDocs, addDoc } from "firebase/firestore";
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
  // 儲存所點擊到的特製按鈕
  const [ selectedOption, setSelectedOption] = useState([]);
  // 儲存計數器數量
  const [ cartQuantity, setCartQuantity ] = useState(1);
  // 儲存備註內容
  const [ comment, setComment ] = useState("");
  // 儲存欲加到購物車的內容
  const [ cartItems, setCartItems ] = useState([]);
  // 儲存購物車ID
  const [ cartId, setCartId ] = useState(null);
  // 儲存日期
  const [ date, setDate ] = useState("");
  // 儲存時間
  const [ time, setTime ] = useState("");
  // 儲存總金額
  const [ totalPrice, setTotalPrice] = useState(0);
  // 儲存內用外帶
  const [ togo, setTogo ] = useState("內用");
  
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

  /**
   * 送出彈窗
   * @param cartId null: 新增 !null: 修改 
   */
  function sendPopup(cartId) {
    // optionTxt顯示所選擇的特製選項文字及金額
    let optionPrice = 0;  // 特製選項金額加總
    let optionTxt = selectedOption.
      map((item) => {
        optionPrice = optionPrice + item.price;
        return `${item.option}+$${item.price}`
      }).join();
    // 產品小計：產品金額加上特製選項金額乘上數量
    let itemPriceSum = (optionPrice + selectedProduct.price) * cartQuantity;

    // 欲儲存的資料
    const saveData = {
      title: selectedProduct.title, // 產品名稱
      price: selectedProduct.price, // 產品原始金額
      options: selectedOption, // 所選擇的特製選項
      optionTxt: optionTxt, // 所選擇的特製選項文字及金額
      optionPrice: optionPrice, // 
      qty: cartQuantity,  // 數量
      itemComment: comment,  // 備註
      itemPriceSum: itemPriceSum, // 產品小計
      productId: selectedProduct.id, // 產品ID
    };

    // 如果是新增
    if (cartId === null) {
      setCartItems((preItems) => [...preItems, saveData]);
    } else {
      let cartItemsSave = JSON.parse(JSON.stringify(cartItems));
      cartItemsSave[cartId] = saveData;
      setCartItems(cartItemsSave);
    };
  }

  // 修改購物車清單
  function editCartItem(index) {
    setCartId(index);  // 傳入點擊到的索引值

    // 尋找現在點選的產品資訊
    let productIdIdx = productList.findIndex((item) => item.id === cartItems[index].productId);
    // 如果有找到
    if (productIdIdx !== -1) {
      // 選擇的產品資訊
      let productListSave = productList[productIdIdx];
      console.log(productListSave);
      // 帶入特製
      setSelectedOption(cartItems[index].options);
      // 帶入數量
      productListSave.qty = cartItems[index].qty;
      setCartQuantity(productListSave.qty);
      // 帶入備註
      setComment(cartItems[index].itemComment);

      setSelectedProduct(productListSave);  // 儲存所點擊到的商品
    }

    setShowPopup(true);
  }
  // useEffect(() => {
  //   console.log(cartItems);
  // },[cartItems])

  //顯示時間 
  function currentDate() {
    const today = new Date();
    setDate(`${today.getFullYear().toString().padStart(2, "0")}-${((today.getMonth())+1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`);
    setTime(`${today.getHours().toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")}:${today.getSeconds().toString().padStart(2, "0")}`);
  }

  // 每秒自動更新時間
  useEffect(() => {
    setInterval(() => {
      currentDate();
    }, 1000);
  },[])

  // 加總總金額
  function sumTotalPrice() {
    return  cartItems.reduce((acc, val) => acc + val.itemPriceSum, 0)
  }
  // 每當cartItems改變時，重新寫入總金額
  useEffect(() => {
    setTotalPrice(sumTotalPrice());
  },[cartItems]);

  /**
   * 訂單列表送出
   * @param isPaid 是否結帳
   */
  function onSubmit(isPaid) {
    addDoc(collection(db, "orderList"), {
      cartItems,
      togo,
      totalPrice,
      orderDate: date,
      orderTime: time,
      isPaid,
    }).then(() => {
      setCartItems([]);
    })
  }

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
                      setSelectedOption([]);  // 清空特製選項
                      setCartId(null);  // 編輯索引值為null 代表是新增
                      setComment("");  // 清空備註欄
                      setCartQuantity(1);  // 清空計數器
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
            <h2>清單({cartItems.length})</h2>
            <hr/>
            <div className="info">
              <span className="orderDate">{date}</span>
              <span className="orderTime">{time}</span>
            </div>
            <hr />
            {/* 內用外帶按鈕區塊 */}
            <div className="togoBtn">
              <Button
                style={`btnMd ${togo === "內用" ? "active" : ""}`}
                text="內用"
                onClick={() => setTogo("內用")}
              ></Button>
              <Button
                style={`btnMd ${togo === "外帶" ? "active" : ""}`}
                text="外帶"
                onClick={() => setTogo("外帶")}
              ></Button>
            </div>
            </div>
            {/* 購物車清單區塊 */}
            <div className="cartList">
              {
                cartItems.map((item, index) => {
                  return (
                    <div className="cartProduct" key={index}>
                      <div className="lCartProduct">
                        <span className="productTitle">{item.title}</span>
                        <span className="productDetail">
                          {item.optionTxt} {item.itemComment ? `,${item.itemComment}` : ""}
                        </span>
                        <span className="productNum">x{item.qty}</span>
                      </div>
                      <div className="rCartProduct">
                        {/* 修改刪除按鈕區塊 */}
                        <div className="modifyBtn">
                          <Button
                            style="btnSm"
                            iconPath={mdiLeadPencil}
                            onClick={() => {editCartItem(index)}}
                          ></Button>
                          <Button
                            style="btnSm"
                            iconPath={mdiTrashCan}
                            onClick={() => {
                              // 刪除
                              setCartItems(cartItems.filter((_,itemIndex) => {
                                return itemIndex !== index
                              }))
                            }}
                          ></Button>
                        </div>
                        <h5 className="productPrice">${item.itemPriceSum}</h5>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* 下方總金額及結帳按鈕區塊 */}
            <div className="cartBottom">
              <hr/>
              <div className="totalAmountArea">
                <h4>Total</h4>
                <h4>{`$${sumTotalPrice()}`}</h4>
              </div>
              <div className="payBtnArea">
                <Button
                  style="btnLg btnLgSecondary"
                  text="暫存"
                  onClick={() => onSubmit(false)}
                ></Button>
                <Button
                  style="btnLg btnLgPrimary"
                  text="結帳"
                  onClick={() => onSubmit(true)}
                ></Button>
              </div>
            </div>
        </div>
		  </div>
      {/* 渲染Popup前先檢查selectedProduct是否存在否則會報錯 */}
      { selectedProduct && (
        <Popup
          showPopup={showPopup}      // 顯示彈窗
          setShowPopup={setShowPopup}  // 顯示彈窗
          selectedProduct={selectedProduct}
          title={`${selectedProduct.title} $${selectedProduct.price}`}
          footer={
            <Button
              style="btnLg btnLgPrimary"
              text={cartId !== null ? "更新" : "加入購物車"}
              onClick={() => {sendPopup(cartId)}}
            ></Button>    
          }
      >
        {/* 上方特製按鈕區塊 */}
        <div className="specialProductArea">
          <h5>特製</h5>
          <div className="specialProductBtn">
            {
              selectedProduct && selectedProduct.options.map((item) => {
                return (
                  <Button
                    key={item.option}
                    style={`btnMd ${selectedOption.indexOf(item) !== -1 ? "active" : ""}`}  // 點擊樣式
                    text={`${item.option}+$${item.price}`}
                    onClick={() => {
                      // 點擊到的選項的索引值，沒有在陣列裡面會回傳-1
                      const index = selectedOption.indexOf(item);
                      // 如果陣列裡沒有這筆所點擊到的option
                      if (index === -1) {
                        // 新增到陣列裡
                        setSelectedOption(prevOption => [...prevOption, item])
                      } else {
                        // 如果點擊到的option陣列裡已經有了，就篩選出來
                        setSelectedOption(prevOption => prevOption.filter((_,i) => {
                          return i !== index
                        }))
                      }
                    }}
                  ></Button>
                )
              })
            }
          </div>
        </div>
        {/* 備註欄區塊 */}
        <div className="remarkArea">
          <h5>備註</h5>
          <textarea 
            name="comment" 
            id="remark" 
            cols="30" 
            rows="5" 
            placeholder="請輸入備註"
            onChange={(e) => {setComment(e.target.value)}}
            value={comment}
          ></textarea>
        </div>
        {/* 計數器區塊 */}
        <div className="counterArea">
          <Counter
            cartQuantity={cartQuantity}
            setCartQuantity={setCartQuantity}
          ></Counter>
        </div>
        </Popup>
      ) }
      
    </>
		
	)
}