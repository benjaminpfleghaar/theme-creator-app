"use client";

import "@/components/Header/Header.scss";
import Tab from "@/components/Tab/Tab";
import { usePathname } from "next/navigation";
import useThemeState from "@/states/useThemeState";

export default function Header() {
	const currentPath = usePathname();
	const { themes } = useThemeState();
	const isActive = (path) => path === currentPath;

	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__nav-list">
					<li>
						<Tab title="Home" target="/" active={isActive("/")} />
					</li>
					{themes.map((theme) => (
						<li key={theme.id}>
							<Tab title={theme.name} target={`/${theme.id}`} active={isActive(`/${theme.id}`)} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
