import { create, type StateCreator } from "zustand";

import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

interface IAuthState {
  userName: string | null;
  userId: string | null;
  avatarUrl: string | null;
}

interface IAuthActions {
  setUserName: (userName: string) => void;
  setUserId: (userId: string) => void;
}

const storeAuth: StateCreator<IAuthState & IAuthActions> = (set, get) => ({
  userName: null,
  userId: null,
  avatarUrl: null,
  setUserName: (userName) => set({ userName }),
  setUserId: (userId) => set({ userId }),
});

const customSessionStorage: StateStorage = {
  getItem: function (name: string): string | Promise<string | null> | null {
    const data = sessionStorage.getItem(name);
    return data;
  },
  setItem: function (name: string, value: string): void | Promise<void> {
    sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void | Promise<void> {
    throw new Error("Function not implemented.");
  },
};

export const useGlobalStore = create<IAuthState & IAuthActions>()(
  persist(storeAuth, {
    name: "authStore",
    storage: createJSONStorage(() => customSessionStorage),
  }),
);
