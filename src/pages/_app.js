import React, { useEffect, useState } from "react";
import "../themes/fonts.scss";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import { defaultTheme } from "../themes/defaultTheme";
import { store } from "../redux/store";
import { CookiesProvider } from "react-cookie";
import CommonLayout from "../components/layouts/commonLayout";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme);
  const path = useRouter();
  const Wrapper = CommonLayout;

  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={currentTheme}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <ToastContainer />
        </ThemeProvider>
      </ReduxProvider>
    </CookiesProvider>
  );
}

export default MyApp;
