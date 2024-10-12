"use client";

import { useState } from "react";
import "@/components/Colors/Header/Header.scss";
import Input from "@/components/Global/Input/Input";
import useThemeState from "@/states/useThemeState";
import Button from "@/components/Global/Button/Button";

export default function Header({ children, themeId }) {
	const [toggle, setToggle] = useState(false);
	const { themes, editTheme, deleteTheme, addColor } = useThemeState();

	const handleSubmit = (event) => {
		event.preventDefault();
		const response = new FormData(event.target);
		const { themeName } = Object.fromEntries(response);
		editTheme(themeId, themeName);
		setToggle(false);
	};

	return (
		<header className="header">
			{toggle ? (
				<form className="header__form" onSubmit={handleSubmit}>
					<Input name="themeName" value={children} focus />
					<Button type="submit">Save</Button>
					<Button type="button" onClick={() => setToggle(false)}>
						Cancel
					</Button>
					<Button type="icon" onClick={() => deleteTheme(themeId)} disabled={themes.length < 2 ? true : false}>
						Delete
					</Button>
				</form>
			) : (
				<h1 className="header__title header__title--pointer" onClick={() => setToggle(true)}>
					{children}
				</h1>
			)}
			<Button type="button" onClick={() => addColor(themeId)}>
				Add Color
			</Button>
		</header>
	);
}
