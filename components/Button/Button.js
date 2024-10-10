import "@/components/Button/Button.scss";

export default function Button({ label, type, disabled }) {
	return (
		<button type={type} className="button" disabled={disabled}>
			{label}
		</button>
	);
}
