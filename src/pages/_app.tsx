import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnswersProvider } from "./components/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return <AnswersProvider><Component {...pageProps} /></AnswersProvider>
}
