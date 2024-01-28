import { AppProps } from "next/app";
import "../styles/globals.css"; // 전역 스타일을 여기에 적용

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
