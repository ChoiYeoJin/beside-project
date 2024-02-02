function loginUser(token: string) {
  localStorage.setItem("token", token);
}

// 로그아웃 시
function logoutUser() {
  localStorage.removeItem("token");
}

function isUserLoggedIn() {
  // 'token' 항목을 localStorage에서 가져옵니다.
  const token = localStorage.getItem("token");

  // 'token'이 존재하면 true, 그렇지 않으면 false를 반환합니다.
  return token !== null;
}

const addProgramBookmark = (id: string) => {
  const bookmarks = JSON.parse(
    localStorage.getItem("programBookmarks") || "[]"
  );
  if (!bookmarks.includes(id)) {
    bookmarks.push(id);
  }
};

const isProgramBookmarked = (id: string) => {
  const bookmarks = JSON.parse(
    localStorage.getItem("programBookmarks") || "[]"
  );
};

const addShortcutBookmark = (id: string) => {
  const bookmarks = JSON.parse(
    localStorage.getItem("shortcutBookmarks") || "[]"
  );
  if (!bookmarks.includes(id)) {
    bookmarks.push(id);
  }
};
