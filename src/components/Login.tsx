import React, { useState ,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom"
import TopBar from "./TopBar";

export default function Login(props: {
  onLogin(userName: string,password:string,email:string): void
}){
  const [title, setTitle] = useState("");
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showLoginButton,setshowLoginButton] = useState(true);
  const [gu, setGu] = useState(""); //로그인페이지인지? 회원가입페이지인지 구분
  const {pathname} = useLocation();
  useEffect(() => {
    buttonShow();
  }, [pathname]);

  const buttonShow =()=>{
    if(pathname==="/login"){
      setName(''); //초기화
      setEmail(''); //초기화
      setTitle("로그인");
      setshowLoginButton(true);
      setGu('login');
    }else{
      setName(''); //초기화
      setEmail(''); //초기화
      setTitle("회원가입");
      setshowLoginButton(false);
      setGu('join');
    }
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {
      target : {name, value},
    } = e;
    if (name==="name"){
      setName(value);
    }else if(name==="email"){
      setEmail(value);
    }else if(name==="password"){
      setPassword(value);
    }
  }
  //로그인, 회원가입 버튼 클릭
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //onLogin로 userName,email,gu 보내주기
    props.onLogin(userName,password,email) 
    // setPassword('');
  }
  return (
    <div className="Common">
      <TopBar/>
      <form onSubmit={handleSubmit} id="login-form">
        <div className="LoginTitle">
          <p>{title}</p>
        </div>
        {
          !showLoginButton&&<input placeholder="이름" type="text" required value={userName} name="name" onChange={onChange}/>
        }
        <input placeholder="이메일" type="email" required value={email} name="email" onChange={onChange}/>
        <input placeholder="비밀번호" type="password" required value={password} name="password" onChange={onChange}/>
        {showLoginButton ? 
        (<input type="submit" value="로그인" name="login" />)
        :(<input type="submit" value="계정생성" name="join"/>)}
      </form>
    </div>
  )
}