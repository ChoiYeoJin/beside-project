function validateEmail(email: string): string {
  if (!email) {
    return "이메일을 입력해세요.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "유효한 이메일 주소를 입력해주세요.";
  }
  return "";
}

function validatePassword(password: string): string {
  if (!password) {
    //setPasswordError("비밀번호를 입력해주세요.");
    return "비밀번호를 입력해주세요.";
  } else if (password.length < 6) {
    return "비밀번호는 6자 이상이어야 합니다.";
  }
  return "";
}

function validateNickname(nickname: string): string {
  if (!nickname) {
    return "닉네임을 입력해주세요.";
  } else if (nickname.length < 2 || nickname.length > 10) {
    return "닉네임은 2자 이상 10자 이하이어야 합니다.";
  } else if (!/^[a-zA-Z0-9가-힣]+$/.test(nickname)) {
    return "닉네임에는 특수문자를 사용할 수 없습니다.";
  }
  return "";
}

export { validateEmail, validatePassword, validateNickname };
