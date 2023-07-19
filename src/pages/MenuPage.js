import { Button } from "../components/Button";

import Icon from '@mdi/react';
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
                <div className="productCard">
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
        <div className="container">
          <h3>清單(3)</h3>
          <hr/>
          <div className="info"></div>
          <hr />
          <Button
            style="btnMd"
            text="內用"
          ></Button>
          <Button
            style="btnSm"
            iconPath={mdiLeadPencil}
          ></Button>
        </div>
      </div>
		</div>
	)
}