import Head from "next/head";
import Image from "next/image";
import loadingGif from "@/public/gifs/loading.gif";
import useAuth from "@/src/data/hook/useAuth";

import Script from "next/script";

import Router from "next/router";

interface ToForceAuthenticationProps {
  children: any;
}

export default function ToForceAuthentication(
  props: ToForceAuthenticationProps
) {
  const { user, loading } = useAuth();

  const toRenderContent = () => {
    return (
      <>
        <Script
          id="auth-check-script"
          dangerouslySetInnerHTML={{
            __html: `
            if (!document.cookie?.includes("admin-template-lukaz-auth")) {
              window.location.href = "/authentication";
            }
          `,
          }}
          strategy="afterInteractive"
        />
        {props.children}
      </>
    );
  };

  const toRenderLoading = () => {
    return (
      <div
        className={`
            flex justify-center items-center h-screen
            `}
      >
        <Image src={loadingGif} alt="Carregando..." />
      </div>
    );
  };

  if (!loading && user?.email) {
    return toRenderContent();
  } else if (loading) {
    return toRenderLoading();
  } else {
    Router.push("/authentication");
    return null;
  }
}
