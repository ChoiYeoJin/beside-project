import ImageButton from "../Button/ImageButton";

export default function GoogleLogin() {
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || "";

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const scope = "email";

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(scope)}&response_type=code&access_type=offline`;

  const handleGoogleLogin = () => {
    window.location.href = authUrl;
  };

  return (
    <ImageButton
      text="Google로 로그인"
      imageSrc="https://img.icons8.com/color/48/000000/google-logo.png"
      backgroundColor="white"
      onClick={handleGoogleLogin}
    />
  );
}
