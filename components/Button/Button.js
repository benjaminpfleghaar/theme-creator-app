import "@/components/Button/Button.scss";

export default function Button({ children, type, onClick }) {
	return (
		<button type={type} className="button" onClick={onClick}>
			{children}
		</button>
	);
}
