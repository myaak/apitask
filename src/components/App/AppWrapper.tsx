import Header from "../Header/Header.tsx";
import AppRouter from "../AppRouter/AppRouter.tsx";

const AppWrapper = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default AppWrapper;
