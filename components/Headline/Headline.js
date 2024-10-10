"use client";

import { useState } from "react";
import Input from "@/components/Input/Input";
import "@/components/Headline/Headline.scss";
import Button from "@/components/Button/Button";

export default function Headline() {
	const [toggle, setToggle] = useState(false);

	return (
		<header className="theme__header">
			{toggle ? (
				<form className="theme__form">
					<Input name="name" value="Default Theme" focus />
					<Button type="submit">Save</Button>
					<Button type="button" onClick={() => setToggle(false)}>
						Cancel
					</Button>
					<Button type="icon" disabled>
						Delete
					</Button>
				</form>
			) : (
				<h1 className="theme__headline" onClick={() => setToggle(true)}>
					Default Theme
				</h1>
			)}
			<Button type="button">Add Color</Button>
		</header>
	);
}
