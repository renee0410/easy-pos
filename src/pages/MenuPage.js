import { Button } from "../components/Button";
// icon
import { 
	mdiLeadPencil, // 修改
  mdiTrashCan  // 刪除
} from '@mdi/js';

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
  const productListData = [
    {
      img: 'russian-apetizer-blinchik-crepes-inside-white-plate.jpg',
      title: '原味蛋餅',
      price: 25,
    },
    {
      img: 'russian-apetizer-blinchik-crepes-inside-white-plate.jpg',
      title: '玉米蛋餅',
      price: 35,
    },
    {
      img: 'tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg',
      title: '嫩蛋漢堡',
      price: 35,
    },
    {
      img: 'tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg',
      title: '豬排漢堡',
      price: 45,
    },
    {
      img: 'delicious-peanut-butter-toast.jpg',
      title: '薄片吐司',
      price: 25,
    },
    {
      img: 'sandwich.jpg',
      title: '火腿吐司',
      price: 40,
    },
    {
      img: 'sandwich.jpg',
      title: '香雞吐司',
      price: 50,
    },
    {
      img: 'fried-tofu.jpg',
      title: '蘿蔔糕',
      price: 30,
    },
    {
      img: 'close-up-french-fries-plate.jpg',
      title: '薯條',
      price: 35,
    },
    {
      img: 'spaghetti-with-bolognese-sauce-wooden-tablexa.jpg',
      title: '義大利肉醬麵',
      price: 45,
    },
    {
      img: 'top-view-salad-dark-bowl.jpg',
      title: '生菜沙拉',
      price: 60,
    },
    {
      img: 'front-view-herbal-tea-concept-with-lemon.jpg',
      title: '紅茶',
      price: 20,
    },
    {
      img: 'closeup-glass-ice-tea-with-milk-table-white.jpg',
      title: '奶茶',
      price: 30,
    },
    {
      img: 'ice-falling-brown-drink.jpg',
      title: '咖啡',
      price: 30,
    },
  ];

  return (
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
            productListData.map((item) => {
              return (
                <div className="productCard" key={item.title}>
                  <div className="imgBoxFit">
                    <img src={require(`../assets/img/products/${item.img}`)} alt="" />
                  </div>
                  <div className="cardBody">
                    <span className="cardTitle">{item.title}</span>
                    <span className="cardPrice">{`$${item.price}`}</span>
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
          <h3>清單(3)</h3>
          <hr/>
          <div className="info">
            <div className="orderId">訂單編號＃01</div>
            <div className="orderDate">2023-04-10 19:00:00</div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>

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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
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
                <div className="productPrice">$40</div>
              </div>
            </div>
          </div>
          {/* 下方總金額及結帳按鈕區塊 */}
          <div className="cartBottom">
            <hr/>
            <div className="totalAmountArea">
              <span>Total</span>
              <span>$130</span>
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
	)
}