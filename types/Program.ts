type Program = {
  id: string;
  platform: string;
  image_url: string;
  bookmark?: number;
};

type Shortcut = {
  id: string;
  description: string;
  category: string;
  platform: string;
  keys_list: string[];
  bookmark?: number;
  image: string;
};

type Profile = {
  nickname?: string;
  username?: string;
  postCount?: number;
  commentCount?: number;
  likeCount?: number;
};
