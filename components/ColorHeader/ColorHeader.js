import { useState } from "react";
import Input from "@/components/Input/Input";
import { useThemeState } from "@/libs/states";
import Button from "@/components/Button/Button";
import "@/components/ColorHeader/ColorHeader.scss";

export default function ColorHeader({ children, themeId }) {
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
		<header className="color-header">
			{toggle ? (
				<form className="color-header__form" onSubmit={handleSubmit}>
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
				<h1 className="color-header__title" onClick={() => setToggle(true)}>
					{children}
				</h1>
			)}
			<Button type="button" onClick={() => addColor(themeId)}>
				Add Color
			</Button>
		</header>
	);
}
