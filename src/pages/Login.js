import { useState } from "react";
import LoginBg from "../assets/img/LoginBg.svg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  // 跳轉頁面
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors }, // 查看錯誤訊息
  } = useForm({mode: 'onTouched'});  // {mode: 'onTouched'}立即執行判斷錯誤
  // 即時監聽input的值
  const email = useWatch({
    control,
    name: 'email',
  });
  const password = useWatch({
    control,
    name: 'password',
  });
  // 存放alert錯誤訊息資訊
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = Credential.user;
        navigate('/home');
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("信箱不存在")
        } else if (error.code === "auth/wrong-password") {
          alert("密碼錯誤")
        }else {
          alert("信箱格式不正確")
        }
      });
  }
  
  return (
    <div className="loginPage">
      <div className="lBlock">
        <img src={LoginBg} alt="" />
      </div>
      <div className="rBlock">
        <div className="loginBlock">
          <h1>登入</h1>
          <form className="loginForm" action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputContainer">
              <label htmlFor="account">帳號</label>
              <input 
                id="account" 
                type="email" 
                placeholder="請輸入email" 
                name="email" 
                {...register('email', {
                  required: {
                    value: true,  // 為必填
                    message: "email為必填"  // 回傳的錯誤訊息
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "email格式錯誤"
                  }
                })}
                className={ errors.email ? 'isInvalid' : '' } 
              />
                {/* 顯示錯誤訊息 */}
                {
                  errors.email ? ( <p className="invalidFeedback">{errors?.email?.message}</p>) : ""
                }
            </div>
            <div className="inputContainer">
              <label htmlFor="password">密碼</label>
              <input 
                type="password" 
                placeholder="請輸入密碼" 
                name="password" 
                {...register('password', {
                  required: {
                    value: true,
                    message: "密碼為必填"
                  },
                  maxLength: {
                    value: 12,
                    message: "密碼不可超過12碼"
                  },
                  minLength: {
                    value: 6,
                    message: "密碼不可少於6碼"
                  }
                })}
                className={errors.password ? 'isInvalid' : ''}
              />
              {/* 顯示錯誤訊息 */}
              {
                  errors.password ? ( <p className="invalidFeedback">{errors?.password?.message}</p>) : ""
              }
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