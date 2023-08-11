import Header from "../Header/Header.tsx";
import AppRouter from "../AppRouter/AppRouter.tsx";
import { Main } from "./AppWrapper.styled.ts";

const AppWrapper = () => {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
    </>
  );
};

export default AppWrapper;
