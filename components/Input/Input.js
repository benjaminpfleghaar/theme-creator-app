import "@/components/Input/Input.scss";

export default function Input({ type, name, value, onChange, focus }) {
	if (type === "color") return <input type="color" className="input input--color" value={value} onChange={onChange} />;
	if (onChange) return <input type="text" name={name} className="input input--text" value={value} onChange={onChange} required />;

	return <input type="text" name={name} className="input input--text" defaultValue={value} autoFocus={focus} required />;
}
