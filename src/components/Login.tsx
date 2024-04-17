import React, { useState ,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom"

export default function Login(props: {
  onTemp(userName: string, email:string, gu:string): void
}){
  const [title, setTitle] = useState("");
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showLoginButton,setshowLoginButton] = useState(true);
  const [gu, setGu] = useState(""); //로그인페이지인지? 회원가입페이지인지 구분
  const {pathname} = useLocation();
  useEffect(() => {
    buttonShow();
  }, [pathname]);

  const buttonShow =()=>{
    if(pathname==="/login"){
      setTitle("로그인");
      setshowLoginButton(true);
      setGu('login');
    }else{
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
    }
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(gu==="login"){
      console.log("gu"+gu);
    }else{
      console.log("gu"+gu);
    }
    //onTemp로 userName,email,gu 보내주기
    props.onTemp(userName,email,gu) 
  }
  return (
    <div className="Common">
      <form onSubmit={handleSubmit} id="login-form">
        <div className="LoginTitle">
          <p>{title}</p>
        </div>
        <input placeholder="이름" type="text" required value={userName} name="name" onChange={onChange}/>
        <input placeholder="이메일" type="email" required value={email} name="email" onChange={onChange}/>
        {showLoginButton ? 
        (<input type="submit" value="로그인" name="login" />)
        :(<input type="submit" value="계정생성" name="join"/>)}
      </form>
    </div>
  )
}