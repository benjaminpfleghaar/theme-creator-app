"use client";

import { useState } from "react";
import "@/components/Color/Color.scss";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function Color({ role, color }) {
	const [toggle, setToggle] = useState(false);

	return (
		<section className="color" style={{ backgroundColor: color }} onClick={() => setToggle(!toggle)}>
			<h4 className="color__title">
				{role} <small className="color__title--details">{color.toUpperCase().slice(1)}</small>
			</h4>
			{toggle && (
				<form className="color__form">
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
						<Button type="icon">Delete</Button>
					</section>
				</form>
			)}
		</section>
	);
}
