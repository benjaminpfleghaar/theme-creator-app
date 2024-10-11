import Link from "next/link";
import "@/components/Theme/Theme.scss";

export default function Theme() {
	return (
		<section className="theme">
			<Link href="/default" title="View Default Theme" className="theme__link">
				<div style={{ backgroundColor: "#003049" }}></div>
				<div style={{ backgroundColor: "#d62828" }}></div>
				<div style={{ backgroundColor: "#f77f00" }}></div>
				<div style={{ backgroundColor: "#fcbf49" }}></div>
			</Link>
			<h4 className="theme__title">
				Default Theme <small className="theme__title--details">8 Colors</small>
			</h4>
		</section>
	);
}
