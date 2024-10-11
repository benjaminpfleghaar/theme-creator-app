import { create } from "zustand";
import { themes } from "@/lib/themes";

const useThemeState = create((set) => ({
	themes: themes,
}));

export default useThemeState;
