"use client";

import "@/components/Themes/Header/Header.scss";
import useThemeState from "@/states/useThemeState";
import Button from "@/components/Global/Button/Button";

export default function Header({ children }) {
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
