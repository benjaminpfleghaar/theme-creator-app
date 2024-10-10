import "@/components/Color/Color.scss";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import ColorInput from "@/components/ColorInput/ColorInput";
import IconButton from "@/components/IconButton/IconButton";

export default function Color({ role, color }) {
	return (
		<section className="color" style={{ backgroundColor: color }}>
			<h4 className="color__title">
				{role} <small className="color__title--small">{color.toUpperCase().slice(1)}</small>
			</h4>
			<form className="color__form">
				<section className="color__form-fields">
					<Input name="role" value={role} />
					<Input name="hex" value={color} />
					<ColorInput value={color} />
				</section>
				<section className="color__form-buttons">
					<Button type="submit">Save</Button>
					<Button type="button">Cancel</Button>
					<IconButton />
				</section>
			</form>
		</section>
	);
}
