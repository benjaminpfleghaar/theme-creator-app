"use client";

import Button from "@/components/Button/Button";
import useThemeState from "@/states/useThemeState";
import "@/components/ThemeHeader/ThemeHeader.scss";

export default function ThemeHeader({ children }) {
	const { addTheme } = useThemeState();

	return (
		<header className="header">
			<h1 className="header__title">{children}</h1>
			<Button type="button" onClick={addTheme}>
				New Theme
			</Button>
		</header>
	);
}
