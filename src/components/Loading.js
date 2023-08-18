import ReactLoading from 'react-loading';
import { useState, useEffect } from 'react';

export function Loading() {
  // 初始顯示loading
  const [showLoading, setShowLoading] = useState(true);

  // 每次有執行loading的時候，會讓他跑完0.5秒
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    },500)

    // 清除
    return () => {
      clearTimeout(loadingTimer);
    };
  },[showLoading]);

  return (
      <div className='loadingStyle'>
        <ReactLoading type='spokes' color='black' height={50} width={50} />
      </div>
  )
}