import Image from "next/image";
import "@/components/IconButton/IconButton.scss";

export default function IconButton({ disabled, onClick }) {
	return (
		<button type="button" className="button__icon" onClick={onClick} disabled={disabled}>
			<Image src="/delete.svg" width={12} height={14} alt="Delete" />
		</button>
	);
}
