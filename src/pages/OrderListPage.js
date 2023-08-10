import { useEffect,useState } from "react";
import { Button } from "../components/Button"
// icon
import { 
	mdiLeadPencil, // 修改
  mdiTrashCan  // 刪除
} from '@mdi/js';
// firebase
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export function OrderListPage() {
  // 儲存訂單列表資訊
  const [ orderList, setOrderList ] =useState([]);

  // 取得訂單列表api
  function getOrderList() {
    getDocs(collection(db, "orderList")).
      then((doc) => {
        const orderList = doc.docs.map((data) => {
          return {...data.data(), id: data.id};
        })
        setOrderList(orderList);
      })
  }

  // 呼叫取得訂單列表api
  useEffect(() => {
    getOrderList();
  },[]);

  // 按下結帳按鈕時呼叫更改訂單列表api
    function handleSubmit(id) {
      console.log(id)
      const washingtonRef = doc(db, "orderList", id);
      updateDoc(washingtonRef, {
        isPaid: true
      }).then(() => {
        getOrderList();
      })
    }
    
  return (
    <>
      <div className="container orderListPage">
        <div className="orderListPageHeader">
          <h2>訂單管理</h2>
        </div>
        <div className="listArea">
          <table>
            <thead>
              <tr>
                <th className="num">#</th>
                <th className="orderDate">日期</th>
                <th className="orderTime">時間</th>
                <th className="orderItems">餐點</th>
                <th className="orderPrice">金額</th>
                <th className="togo">內用外帶</th>
                <th className="isPaid">付款狀態</th>
                <th className="paid">結帳</th>
              </tr>
            </thead>
              <tbody>
                {
                  orderList.map((item, index) => {
                    console.log(item)
                    return (
                      <tr key={item.id}>
                        <td>{`${(index + 1).toString().padStart(2, "0")}`}</td>
                        <td>{item.orderDate}</td>
                        <td>{item.orderTime}</td>
                        <td className="orderItems">
                          {
                            item.cartItems.map((cartItem) => {
                              return (cartItem.title + 'x' + cartItem.qty + ' ')
                            })
                          }
                        </td>
                        <td>${item.totalPrice}</td>
                        <td>{item.togo}</td>
                        <td className={`isPaid ${item.isPaid ? "complete" : ""}`}>
                          {`${item.isPaid ? "已付款" : "尚未付款"}`}
                        </td>
                        <td className="paid">
                        {item.isPaid ? "" :
                          <Button
                            style="btnMd"
                            text="結帳"
                            onClick={() => handleSubmit(item.id)}
                          ></Button>
                        }
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}