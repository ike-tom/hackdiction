import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../theme/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
