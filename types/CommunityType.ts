type NewPost = {
  title: string;
  content: string;
  author: string;
  category: string;
  platform: string;
};

type Post = {
  id: string;
  author: string;
  title: string;
  content: string;
  platform: string;
  created_at: string;
  updated_at: string;
};

type PostComment = {
  post: string; // id
  content: string;
  author: string;
};
