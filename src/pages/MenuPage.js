export function MenuPage() {
	const tabList = [
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
  return (
		<div className="container menuPage">
			{/* 左側產品列表區塊 */}
			<div className="productListArea">
				{/* 頁籤區塊 */}
				<div className="tabArea">
					{
						tabList.map((item) => {
							return (
								<button className="tab" key={item.title}>{item.title}</button>
							)
						})
					}
				</div>
				<div className="productList"></div>
			</div>
			{/* 右側購物車區塊 */}
			<div className="cartArea"></div>
		</div>
	)
}