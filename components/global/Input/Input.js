import { useState } from "react";
import "@/components/global/Input/Input.scss";

export default function Input({ type, name, value, focus }) {
	const [inputValue, setInputValue] = useState(value);

	if (type === "color")
		return (
			<>
				<input type="text" name={name} className="input input--text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
				<input type="color" className="input input--color" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			</>
		);

	return <input type="text" name={name} className="input input--text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus={focus} required />;
}
