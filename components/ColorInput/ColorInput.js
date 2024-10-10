import "@/components/ColorInput/ColorInput.scss";

export default function ColorInput({ value }) {
	return <input type="color" className="input__color" defaultValue={value} />;
}
