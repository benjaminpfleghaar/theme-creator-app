"use client";

import Theme from "@/components/Theme/Theme";
import useThemeState from "@/states/useThemeState";
import "@/components/ThemeManager/ThemeManager.scss";
import ThemeHeader from "@/components/ThemeHeader/ThemeHeader";

export default function ThemeManager() {
	const { themes } = useThemeState();

	return (
		<main className="theme-manager">
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
