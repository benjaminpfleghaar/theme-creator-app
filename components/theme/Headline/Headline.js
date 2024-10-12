"use client";

import { useState } from "react";
import Input from "@/components/global/Input/Input";
import "@/components/theme/Headline/Headline.scss";
import useThemeState from "@/states/useThemeState";
import Button from "@/components/global/Button/Button";

export default function Headline({ children, themeId }) {
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
		<header className="headline">
			{toggle ? (
				<form className="headline__form" onSubmit={handleSubmit}>
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
				<h1 className="headline__title headline__title--pointer" onClick={() => setToggle(true)}>
					{children}
				</h1>
			)}
			<Button type="button" onClick={() => addColor(themeId)}>
				Add Color
			</Button>
		</header>
	);
}
