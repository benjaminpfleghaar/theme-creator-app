import "@/components/Input/Input.scss";

export default function Input({ type, name, value, focus }) {
	if (type === "color") return <input type="color" className="input input--color" defaultValue={value} />;

	return <input type="text" name={name} className="input input--text" defaultValue={value} autoFocus={focus} required />;
}
