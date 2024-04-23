
import { useNavigate } from "react-router-dom";

function Main(){
  const navigate = useNavigate();
  const handleGo = (path: string) => {
    navigate(path);
  }
  return (
    <div className="Common MainContainer">
      <div className="MainTitle">
        <div className="MainTitleText">이든 업무 유형 테스트</div>
      </div>
      <div className="MainImg">
        <img src="/img/img_do.png" className="MainSlideImg"/>
      </div>
      <div className="MainBtn">
        <a onClick={() => handleGo('/join')} className="">회원가입</a>
        <a onClick={() => handleGo('/login')} className="">로그인</a>
      </div>
    </div>
  )
}

export default Main;