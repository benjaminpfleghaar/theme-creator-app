"use client";

import Theme from "@/components/Theme/Theme";
import { useThemeState } from "@/libs/states";
import "@/components/ThemeContainer/ThemeContainer.scss";
import ThemeHeader from "@/components/ThemeHeader/ThemeHeader";

export default function ThemeContainer() {
	const { themes } = useThemeState();

	return (
		<main className="theme-container">
			<ThemeHeader>
				{themes.length} Beautiful {themes.length > 1 ? "Themes" : "Theme"}
			</ThemeHeader>
			<section className="theme-section">
				{themes.map((theme) => (
					<Theme key={theme.id} {...theme} />
				))}
			</section>
		</main>
	);
}
