"use client";

import Link from "next/link";
import Image from "next/image";
import Tab from "@/components/Tab/Tab";
import { useThemeState } from "@/libs/states";
import "@/components/Navigation/Navigation.scss";

export default function Navigation() {
	const { themes } = useThemeState();

	return (
		<header className="navigation">
			<nav className="navigation__nav">
				<Link href="/" title="Home" className="navigation__logo">
					<Image src="/images/logo.svg" width={40} height={40} alt="Theme Creator" />
				</Link>
				<ul className="navigation__nav-list">
					<li>
						<Tab title="Home" href="/" />
					</li>
					{themes.map((theme) => (
						<li key={theme.id}>
							<Tab title={theme.name} href={`/${theme.id}`} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
