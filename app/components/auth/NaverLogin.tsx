import ImageButton from "../Button/ImageButton";

export default function NaverLogin() {
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || "";

  const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID; // 네이버 클라이언트 ID
  const state = "RANDOM_STATE_STRING"; // 안전한 무작위 문자열을 생성하여 state 파라미터로 사용

  const stateValue = JSON.stringify({
    provider: "naver",
    csrfToken: "randomStringForCsrfProtection",
  });
  const encodedState = encodeURIComponent(stateValue);

  // 네이버 로그인 URL
  const authUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&state=${encodedState}`;

  const handleNaverLogin = () => {
    window.location.href = authUrl;
  };

  return (
    <ImageButton
      imageSrc="/icons/social-icons/naver.svg" // 네이버 로그인 버튼 이미지 URL
      onClick={handleNaverLogin}
    />
  );
}
