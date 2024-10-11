import Link from "next/link";
import "@/components/Theme/Theme.scss";

export default function Theme({ theme }) {
	const { id, name, colors } = theme;

	return (
		<section className="theme">
			<Link href={id} title={`View ${id}`} className="theme__link">
				{colors.map((color) => (
					<div key={color.id} style={{ backgroundColor: color.hex }}></div>
				))}
			</Link>
			<h4 className="theme__title">
				{name} <small className="theme__title--details">{colors.length} Colors</small>
			</h4>
		</section>
	);
}
