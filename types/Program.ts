type Program = {
  platform: string;
  image_url: string;
};

type Shortcut = {
  id: string;
  description: string;
  category: string;
  platform: string;
  keys_list: string[];
  bookmark: boolean;
  image: string;
};

type Profile = {
  nickname?: string;
  username?: string;
  postCount?: number;
  commentCount?: number;
  likeCount?: number;
};
