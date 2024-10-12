"use client";

import "@/components/home/Themes/Themes.scss";
import Theme from "@/components/home/Theme/Theme";
import useThemeState from "@/states/useThemeState";
import Headline from "@/components/home/Headline/Headline";

export default function Themes() {
	const { themes } = useThemeState();

	return (
		<main className="themes">
			<Headline>
				{themes.length} Beautiful {themes.length > 1 ? "Themes" : "Theme"}
			</Headline>
			<section className="themes__section">
				{themes.map((theme) => (
					<Theme key={theme.id} theme={theme} />
				))}
			</section>
		</main>
	);
}
