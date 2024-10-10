import Link from "next/link";
import "@/components/Preview/Preview.scss";

export default function Preview() {
	return (
		<section className="theme__preview">
			<Link href="/" title="Default Theme" className="theme__preview-link">
				<div style={{ backgroundColor: "red" }}></div>
				<div style={{ backgroundColor: "green" }}></div>
				<div style={{ backgroundColor: "blue" }}></div>
				<div style={{ backgroundColor: "yellow" }}></div>
			</Link>
			<h4 className="theme__preview-title">
				Default Theme <small className="theme__preview-title--small">8 Colors</small>
			</h4>
		</section>
	);
}
