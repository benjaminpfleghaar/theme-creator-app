"use client";

import "@/app/page.scss";
import Theme from "@/components/Theme/Theme";
import Header from "@/components/Header/Header";
import useThemeState from "@/states/useThemeState";
import Headline from "@/components/Headline/Headline";

export default function Home() {
	const { themes } = useThemeState();

	return (
		<>
			<Header />
			<main className="main">
				<Headline>
					{themes.length} Beautiful {themes.length > 1 ? "Themes" : "Theme"}
				</Headline>
				<section className="themes">
					{themes.map((theme) => (
						<Theme key={theme.id} theme={theme} />
					))}
				</section>
			</main>
		</>
	);
}
