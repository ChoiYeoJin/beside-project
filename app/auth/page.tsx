"use client";
import { loginUser } from "@/utils/storage";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URI;

const fetchCode = async (
  provider: string,
  code: string,
  router: AppRouterInstance
) => {
  try {
    let body = null;

    if (provider === "google") {
      body = {
        access_token: code,
      };
    } else {
      body = {
        code: code,
      };
    }

    const token_response = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code: code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        grant_type: "authorization_code",
      }
    );

    const response = await axios.post(
      `${SERVER_URL}/accounts/oauth/${provider}/`,
      {
        access_token: token_response.data.access_token,
      }
    );

    const { access, refresh } = response.data;

    if (response.status === 200) {
      loginUser(access, refresh);
      router.push("/pages/home");
    }
  } catch (error) {
    console.error(error);
  }
};

export default function AuthCallback() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    const returnedState = decodeURIComponent(queryParams.get("state") ?? "");

    if (!code) {
      alert("인증에 실패하였습니다.");
      router.push("/login");
      return;
    }

    let provider = "";
    let csrfToken = "";

    try {
      const stateObj = JSON.parse(returnedState);
      provider = stateObj.provider;
      csrfToken = stateObj.csrfToken;
    } catch (error) {
      console.error("Error parsing state:", error);
      setError("Invalid state parameter. Authentication failed.");
      return;
    }

    if (csrfToken === "randomStringForCsrfProtection" && provider !== "") {
      // CSRF 토큰과 provider가 유효하다면, 인증 코드를 사용하여 서버에 토큰 요청
      fetchCode(provider, code, router);
    } else {
      // CSRF 검증 실패 또는 provider 불일치
      setError("CSRF token mismatch or invalid provider.");
    }

    if (!code) {
      setError("No code parameter found. Authentication failed.");
      return;
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div></div>;
}
