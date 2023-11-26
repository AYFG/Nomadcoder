import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../Firebase.client";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 50px;

  background-color: white;
  font-weight: 600;
  padding: 10px 20px;
  width: 100%;
  color: black;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 25px;
`;
export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg"></Logo>
      Continue with Github
    </Button>
  );
}
