import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateSample() {
  const navigate = useNavigate();
  const goBack = () => {
    const confirm = window.confirm("페이지를 떠나시겠습니까?");
    if (confirm) navigate(-1);
  };
  const goHome = () => {
    const confirm = window.confirm("페이지를 떠나시겠습니까?");
    if (confirm) navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default NavigateSample;
