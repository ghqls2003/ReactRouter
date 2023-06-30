import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true"; // 쿼리의 파싱 결과값은 문자열

  return (
    <div>
      <h1>소개</h1>
      <p>어바웃</p>
      {detail && <p>추가적인 정보 있음</p>}
    </div>
  );
};

export default About;
