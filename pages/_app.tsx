import { Modal } from "@/components/modal";
import { Layout } from "@/containers/layout";
import ModalProvider from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
        <Modal />
      </Layout>
    </ModalProvider>
  );
}
