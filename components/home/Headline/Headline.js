"use client";

import "@/components/home/Headline/Headline.scss";
import useThemeState from "@/states/useThemeState";
import Button from "@/components/global/Button/Button";

export default function Headline({ children }) {
	const { addTheme } = useThemeState();

	return (
		<header className="headline">
			<h1 className="headline__title">{children}</h1>
			<Button type="button" onClick={addTheme}>
				New Theme
			</Button>
		</header>
	);
}
