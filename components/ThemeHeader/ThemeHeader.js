"use client";

import { useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import "@/components/ThemeHeader/ThemeHeader.scss";

export default function ThemeHeader() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{toggle ? (
				<header className="theme__header">
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
					<Button type="button">Add Color</Button>
				</header>
			) : (
				<header className="theme__header">
					<h1 className="theme__headline" onClick={() => setToggle(true)}>
						Default Theme
					</h1>
					<Button type="button">Add Color</Button>
				</header>
			)}
		</>
	);
}
