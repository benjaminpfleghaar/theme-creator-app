"use client";

import "@/components/Themes/Themes.scss";
import useThemeState from "@/states/useThemeState";
import Theme from "@/components/Themes/Theme/Theme";
import Header from "@/components/Themes/Header/Header";

export default function Themes() {
	const { themes } = useThemeState();

	return (
		<main className="main">
			<Header>
				{themes.length} Beautiful {themes.length > 1 ? "Themes" : "Theme"}
			</Header>
			<section className="themes">
				{themes.map((theme) => (
					<Theme key={theme.id} {...theme} />
				))}
			</section>
		</main>
	);
}
