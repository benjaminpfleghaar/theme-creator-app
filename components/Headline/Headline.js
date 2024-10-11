"use client";

import { useState } from "react";
import Input from "@/components/Input/Input";
import "@/components/Headline/Headline.scss";
import Button from "@/components/Button/Button";
import useThemeState from "@/states/useThemeState";

export default function Headline({ children, themeId }) {
	const [toggle, setToggle] = useState(false);
	const { themes, addTheme, editTheme, deleteTheme, addColor } = useThemeState();

	function handleSubmit(event) {
		event.preventDefault();
		const response = new FormData(event.target);
		const { themeName } = Object.fromEntries(response);
		editTheme(themeId, themeName);
		setToggle(false);
	}

	if (themeId)
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

	return (
		<header className="headline">
			<h1 className="headline__title">{children}</h1>
			<Button type="button" onClick={addTheme}>
				New Theme
			</Button>
		</header>
	);
}
