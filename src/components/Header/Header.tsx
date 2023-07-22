import { HeaderTitle, HeaderWrapper } from "./Header.styled.ts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRedirectToMain = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <HeaderTitle onClick={handleRedirectToMain}>HACKER NEWS</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
