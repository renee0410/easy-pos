import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import { useState, useEffect, useContext } from 'react';
import { Loading } from "../components/Loading";
import { AppContext } from "../pages/Layout";
import Calendar from 'moedim';
// firebase
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function Dashboard() {
  const [value, setValue] = useState(new Date());
  const [dashboardData , setDashboardData] = useState([]);
  // 向共用環境AppContext取出方法
  const { isLoading, setIsLoading } = useContext(AppContext);

  function getOrderList() {
    setIsLoading(true);
    getDocs(collection(db, "orderList")).
      then((doc) => {
        const dashboardData = doc.docs.map((data) => {
          return {...data.data(), id: data.id};
        })
        setDashboardData(dashboardData);
        setTimeout(() => {
          setIsLoading(false);
        },500);
      });
  }
  // 呼叫取得訂單列表api
  useEffect(() => {
    getOrderList();
  },[]);
  useEffect(() => {
    console.log(dashboardData);
  },[dashboardData]);
    
  const options = {
    responsive: true,
    maintainAspectRatio: false,  // 不保持原始的寬高比
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

  const doughnutData = {
    labels: ['蛋餅', '漢堡', '吐司', '點心', '鐵板麵', '沙拉', '飲料'],
    datasets: [
      {
        label: '數量',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const barData = {
    labels,
    datasets: [
      {
        label: '營業額',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '訂單總數',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

  return (
    <>
      {
        isLoading && <Loading></Loading>
      }
      <div className=" dashboard container">
        {/* 數字區塊 */}
        <div className="dashboardTop">
          <div className="calendar">
          <Calendar value={value} onChange={(d) => setValue(d)} className='calenderStyle'/>
          </div>
          <div className="dataNumArea">
            {/* 訂單數量 */}
            <div className="orderQuantity">
              <h2 className="text">訂單總數</h2>
              <h2>{dashboardData.length}</h2>
            </div>
            {/* 營業額 */}
            <div className="revenue">
              <h2 className="text">營業額</h2>
              <h2 className="num">{`NT$${dashboardData.reduce((acc, val) => acc + val.totalPrice, 0)}`}</h2>
            </div>
          </div>
          <div className="doughnutArea">
            <Doughnut options={options} data={doughnutData} />
          </div>
        </div>
        <div className="chartArea">
          <div className="verticalBarArea">
            <Bar options={options} data={barData} />
          </div>
        </div>
      </div>
    </>
    
  )
}