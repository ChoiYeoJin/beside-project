function loginUser(token: string) {
  localStorage.setItem("token", token);
}

// 로그아웃 시
function logoutUser() {
  localStorage.removeItem("token");
}

function isUserLoggedIn() {
  const token = localStorage.getItem("token");
  return token !== null;
}

const getProgramBookmarks = () => {
  return JSON.parse(localStorage.getItem("programBookmarks") || "[]");
};

const addProgramBookmark = (id: string) => {
  const bookmarks = JSON.parse(
    localStorage.getItem("programBookmarks") || "[]"
  );
  if (!bookmarks.includes(id)) {
    bookmarks.push(id);
    localStorage.setItem("programBookmarks", JSON.stringify(bookmarks));
  }
};

const removeProgramBookmark = (id: string) => {
  const bookmarks = JSON.parse(
    localStorage.getItem("programBookmarks") || "[]"
  );
  if (bookmarks.includes(id)) {
    bookmarks.splice(bookmarks.indexOf(id), 1);
    localStorage.setItem("programBookmarks", JSON.stringify(bookmarks));
  }
};

const isProgramBookmarked = (id: string) => {
  const bookmarks = JSON.parse(
    localStorage.getItem("programBookmarks") || "[]"
  );

  return bookmarks.includes(id);
};

const getShortcutBookmarks = () => {
  return JSON.parse(localStorage.getItem("shortcutBookmarks") || "[]");
};

const addShortcutBookmark = (id: string) => {
  const shortcuts = JSON.parse(
    localStorage.getItem("shortcutBookmarks") || "[]"
  );
  if (!shortcuts.includes(id)) {
    shortcuts.push(id);
    localStorage.setItem("shortcutBookmarks", JSON.stringify(shortcuts));
  }
};

const isShortcutBookmarked = (id: string) => {
  const shortcuts = JSON.parse(
    localStorage.getItem("shortcutBookmarks") || "[]"
  );

  return shortcuts.includes(id);
};

const removeShortcutBookmark = (id: string) => {
  const shortcuts = JSON.parse(
    localStorage.getItem("shortcutBookmarks") || "[]"
  );

  if (shortcuts.includes(id)) {
    shortcuts.splice(shortcuts.indexOf(id), 1);
    localStorage.setItem("shortcutBookmarks", JSON.stringify(shortcuts));
  }
};

export {
  loginUser,
  logoutUser,
  isUserLoggedIn,
  addProgramBookmark,
  isProgramBookmarked,
  addShortcutBookmark,
  isShortcutBookmarked,
  removeProgramBookmark,
  removeShortcutBookmark,
  getProgramBookmarks,
  getShortcutBookmarks,
};
