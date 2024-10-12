"use client";

import Tab from "@/components/Global/Tab/Tab";
import { usePathname } from "next/navigation";
import useThemeState from "@/states/useThemeState";
import "@/components/global/Navigation/Navigation.scss";

export default function Navigation() {
	const currentPath = usePathname();
	const { themes } = useThemeState();
	const isActive = (path) => path === currentPath;

	return (
		<header className="navigation">
			<nav className="navigation__nav">
				<ul className="navigation__nav-list">
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
