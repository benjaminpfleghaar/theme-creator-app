"use client";

import { useState } from "react";
import "@/components/Color/Color.scss";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import useThemeState from "@/states/useThemeState";
import getContrastColor from "@/utils/getContrastColor";

export default function Color({ themeId, colorId, role, color }) {
	const [toggle, setToggle] = useState(false);
	const { editColor, deleteColor } = useThemeState();

	function handleSubmit(event) {
		event.preventDefault();
		const response = new FormData(event.target);
		const { role, hex } = Object.fromEntries(response);
		editColor(themeId, colorId, role, hex);
	}

	return (
		<section className="color" style={{ backgroundColor: color }}>
			<h4 className={`color__title ${getContrastColor(color)}`} onClick={() => setToggle(!toggle)}>
				{role} <small className="color__title--details">{color.toUpperCase().slice(1)}</small>
			</h4>
			{toggle && (
				<form className="color__form" onSubmit={handleSubmit}>
					<section className="color__form-section">
						<Input type="text" name="role" value={role} />
						<Input type="text" name="hex" value={color} />
						<Input type="color" value={color} />
					</section>
					<section className="color__form-section">
						<Button type="submit">Save</Button>
						<Button type="button" onClick={() => setToggle(false)}>
							Cancel
						</Button>
						<Button type="icon" onClick={() => deleteColor(themeId, colorId)}>
							Delete
						</Button>
					</section>
				</form>
			)}
		</section>
	);
}
