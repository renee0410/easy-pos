import { useEffect, useState } from "react"
import { Popup } from "../components/Popup"
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const [ showPopup, setShowPopup ] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    },500)
  },[navigate]);

  return (
    <Popup
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      title="頁面尚不存在"
    ></Popup>
  )
}