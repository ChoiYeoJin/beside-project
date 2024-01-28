import ImageButton from "../ImageButton";

export default function KakaoLogin() {
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || "";

  const clientId = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
  const scope = "account_email";

  // 카카오 로그인 URL
  const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scope)}&response_type=code`;

  const handleKakaoLogin = () => {
    alert(authUrl);
    window.location.href = authUrl;
  };

  return (
    <ImageButton
      text="Kakao로 로그인"
      imageSrc="/icons/social-icons/kakao_icon.png"
      backgroundColor="#FEE500"
      onClick={handleKakaoLogin}
    />
  );
}
