import { useState } from "react";
import "@/components/Color/Color.scss";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { getContrastColor } from "@/libs/utils";
import useThemeState from "@/states/useThemeState";

export default function Color({ themeId, colorId, colorLength, hex, role }) {
	const [toggle, setToggle] = useState(false);
	const { editColor, deleteColor } = useThemeState();

	const handleSubmit = (event) => {
		event.preventDefault();
		const response = new FormData(event.target);
		const { role, hex } = Object.fromEntries(response);
		editColor(themeId, colorId, role, hex);
	};

	return (
		<section className="color" style={{ backgroundColor: hex }}>
			<h4 className={`color__title ${getContrastColor(hex)}`} onClick={() => setToggle(!toggle)}>
				{role} <small className="color__title--hex">{hex.toUpperCase().slice(1)}</small>
			</h4>
			{toggle && (
				<form className="color__form" onSubmit={handleSubmit}>
					<section className="color__form-section">
						<Input type="text" name="role" value={role} />
						<Input type="color" name="hex" value={hex} />
					</section>
					<section className="color__form-section">
						<Button type="submit">Save</Button>
						<Button type="button" onClick={() => setToggle(false)}>
							Close
						</Button>
						<Button type="icon" onClick={() => deleteColor(themeId, colorId)} disabled={colorLength < 2 ? true : false}>
							Delete
						</Button>
					</section>
				</form>
			)}
		</section>
	);
}
