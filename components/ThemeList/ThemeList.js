"use client";

import Theme from "@/components/Theme/Theme";
import "@/components/ThemeList/ThemeList.scss";
import useThemeState from "@/states/useThemeState";
import ThemeHeader from "@/components/ThemeHeader/ThemeHeader";

export default function ThemeList() {
	const { themes } = useThemeState();

	return (
		<main className="main">
			<ThemeHeader>
				{themes.length} Beautiful {themes.length > 1 ? "Themes" : "Theme"}
			</ThemeHeader>
			<section className="themes">
				{themes.map((theme) => (
					<Theme key={theme.id} {...theme} />
				))}
			</section>
		</main>
	);
}
