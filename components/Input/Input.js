import "@/components/Input/Input.scss";

export default function Input({ name, value, focus }) {
	return <input type="text" name={name} className="input__text" defaultValue={value} autoFocus={focus} required />;
}
