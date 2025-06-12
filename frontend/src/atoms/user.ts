import { atom } from "recoil";

type User = {
  user_id: number;
  user_name: string;
  message: string;
};

export const userAtom = atom<User | null>({
    key: 'userAtom',
    default: null,
})