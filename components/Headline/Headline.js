"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Input from "@/components/Input/Input";
import "@/components/Headline/Headline.scss";
import Button from "@/components/Button/Button";

export default function Headline({ children }) {
	const [toggle, setToggle] = useState(false);
	const { id } = useParams();

	if (id)
		return (
			<header className="headline">
				{toggle ? (
					<form className="headline__form">
						<Input name="name" value={children} focus />
						<Button type="submit">Save</Button>
						<Button type="button" onClick={() => setToggle(false)}>
							Cancel
						</Button>
						<Button type="icon" disabled>
							Delete
						</Button>
					</form>
				) : (
					<h1 className="headline__title headline__title--pointer" onClick={() => setToggle(true)}>
						{children}
					</h1>
				)}
				<Button type="button">Add Color</Button>
			</header>
		);

	return (
		<header className="headline">
			<h1 className="headline__title">{children}</h1>
			<Button type="button">New Theme</Button>
		</header>
	);
}
