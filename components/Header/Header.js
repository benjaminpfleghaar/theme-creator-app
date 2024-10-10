import "@/components/Header/Header.scss";
import Link from "@/components/Link/Link";

export default function Header() {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li>
						<Link title="Home" target="/" active />
					</li>
					<li>
						<Link title="Default Theme" target="/" />
					</li>
				</ul>
			</nav>
		</header>
	);
}
