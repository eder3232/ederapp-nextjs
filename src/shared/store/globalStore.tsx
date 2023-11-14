import { create } from "zustand";

interface IGlobalStore {}

export const useGlobalStore = create<IGlobalStore>((set) => ({}));
