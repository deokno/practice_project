import React, { useState ,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom"

export default function Login(){
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showLoginButton,setshowLoginButton] = useState(true);
  const {pathname} = useLocation();
  useEffect(() => {
    buttonShow();
  }, [pathname]);

  const buttonShow =()=>{
    if(pathname==="/login"){
      setshowLoginButton(true);

    }else{
      setshowLoginButton(false);
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
    const{
      currentTarget : {name}
    }=e;

    if(name==="login"){
      console.log("로그인로직");
    }else if(name==="join"){
      console.log("계정생성로직");
    }

    const data = {
      userName,
      email
    }
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input placeholder="이름" type="text" required value={userName} name="name" onChange={onChange}/>
        <input placeholder="이메일" type="email" required value={email} name="email" onChange={onChange}/>
        {showLoginButton ? 
        (<input type="submit" value="로그인" name="login"/>)
        :(<input type="submit" value="계정생성" name="join"/>)}
      </form>
    </div>
  )
}