import Link from "next/link";
import "@/components/home/Theme/Theme.scss";

export default function Theme({ theme }) {
	const { id, name, colors } = theme;

	return (
		<section className="theme">
			<Link href={id} title={`View ${name}`} className="theme__link">
				{colors.map((color) => (
					<div key={color.id} style={{ backgroundColor: color.hex }}></div>
				))}
			</Link>
			<h2 className="theme__title">
				{name}
				<small className="theme__title--details">
					{colors.length} {colors.length > 1 ? "Colors" : "Color"}
				</small>
			</h2>
		</section>
	);
}
