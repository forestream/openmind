import { useState } from "react";
import postUser from "../apis/postUser";

const GenerateUser = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="이름을 입력하세요"
        value={userName}
        onChange={handleChange}
      />
      <button type="button">질문 받기</button>
    </form>
  );
};

export default GenerateUser;
