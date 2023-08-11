import AppWrapper from "./components/App/AppWrapper.tsx";
import { store } from "./store/store.ts";
import { theme } from "./theme/theme.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppWrapper />;
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
