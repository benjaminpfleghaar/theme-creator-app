import { uid } from "uid";
import { create } from "zustand";
import { themes } from "@/lib/themes";

const useThemeState = create((set) => ({
	themes: themes,
	addTheme: () =>
		set((state) => ({
			themes: [
				{
					id: uid(),
					name: "New Theme",
					colors: [
						{ id: uid(), role: "Primary", hex: "#f4f4f4" },
						{ id: uid(), role: "Secondary", hex: "#c6c6c6" },
						{ id: uid(), role: "Tertiary", hex: "#8d8d8d" },
						{ id: uid(), role: "Highlight", hex: "#525252" },
						{ id: uid(), role: "Background", hex: "#262626" },
					],
				},
				...state.themes,
			],
		})),
	editTheme: (themeId, name) =>
		set((state) => ({
			themes: state.themes.map((theme) => (theme.id === themeId ? { ...theme, name: name } : theme)),
		})),
	deleteTheme: (themeId) =>
		set((state) => ({
			themes: state.themes.filter((theme) => theme.id !== themeId),
		})),
	addColor: (themeId) =>
		set((state) => ({
			themes: state.themes.map((theme) => (theme.id === themeId ? { ...theme, colors: [{ id: uid(), role: "New Color", hex: "#f4f4f4" }, ...theme.colors] } : theme)),
		})),
	editColor: (themeId, colorId, role, hex) =>
		set((state) => ({
			themes: state.themes.map((theme) => (theme.id === themeId ? { ...theme, colors: theme.colors.map((color) => (color.id === colorId ? { ...color, role: role, hex: hex } : color)) } : theme)),
		})),
	deleteColor: (themeId, colorId) =>
		set((state) => ({
			themes: state.themes.map((theme) => (theme.id === themeId ? { ...theme, colors: theme.colors.filter((color) => color.id !== colorId) } : theme)),
		})),
}));

export default useThemeState;
