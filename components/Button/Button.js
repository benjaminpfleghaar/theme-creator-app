import "@/components/Button/Button.scss";

export default function Button({ children, type, disabled, onClick }) {
	if (type === "icon")
		return (
			<button type="button" className="button button--icon" aria-label="Delete" onClick={onClick} disabled={disabled}>
				<span className="button__text--hidden">Delete</span>
			</button>
		);

	return (
		<button type={type} className="button button--primary" onClick={onClick}>
			{children}
		</button>
	);
}
