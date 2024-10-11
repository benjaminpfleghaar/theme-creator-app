import { uid } from "uid";
import { create } from "zustand";
import { themes } from "@/lib/themes";
import { persist } from "zustand/middleware";

const useThemeState = create(
	persist(
		(set) => ({
			themes: themes,
			addTheme: () =>
				set((state) => ({
					themes: [
						{
							id: uid(),
							name: "New Theme",
							colors: [
								{ id: "primary", role: "Primary", hex: "#f4f4f4" },
								{ id: "secondary", role: "Secondary", hex: "#c6c6c6" },
								{ id: "tertiary", role: "Tertiary", hex: "#8d8d8d" },
								{ id: "highlight", role: "Highlight", hex: "#525252" },
								{ id: "background", role: "Background", hex: "#262626" },
							],
						},
						...state.themes,
					],
				})),
			editTheme: (id, name) =>
				set((state) => ({
					themes: state.themes.map((theme) => (theme.id === id ? { ...theme, name: name } : theme)),
				})),
			deleteTheme: (id) =>
				set((state) => ({
					themes: state.themes.filter((theme) => theme.id !== id),
				})),
		}),
		{
			name: "themes",
		}
	)
);

export default useThemeState;
