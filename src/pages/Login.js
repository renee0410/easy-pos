import LoginBg from "../assets/img/LoginBg.svg";
import { Button } from "../components/Button";

export function Login() {
  return (
    <div className="loginPage">
      <div className="lBlock">
        <img src={LoginBg} alt="" />
      </div>
      <div className="rBlock">
        <div className="loginBlock">
          <h1>登入</h1>
          <form className="loginForm" action="">
            <div className="inputContainer">
              <label htmlFor="account">帳號</label>
              <input id="account" ype="email" placeholder="請輸入email"/>
            </div>
            <div className="inputContainer">
              <label htmlFor="password">密碼</label>
              <input type="password" placeholder="請輸入密碼"/>
            </div>
            <div className="loginBtn">
              <Button
                style="btnLg btnLgPrimary"
                text="登入"
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}