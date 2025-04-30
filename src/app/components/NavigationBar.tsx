'use client';
import { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
// import { useTheme } from 'next-themes';

export const NavigationBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	// const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
			setIsOpen(false);
		}
	};

	// const toggleTheme = () => {
	// 	setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	// };

	const navItems = [
		{ href: 'about', label: 'About' },
		{ href: 'projects', label: 'Projects' },
		{ href: 'skills', label: 'Skills' },
		{ href: 'contact', label: 'Contact' },
	];

	return (
		// Using an invisible bottom border here because something weird happens when scrolled is true (when i scroll)
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
				? 'backdrop-blur-xl bg-white/60 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800'
				: 'bg-transparent border-zinc-200/0 dark:border-zinc-800/0'
				}`}
		>
			<div className="max-w-6xl mx-auto px-3">
				<div className="flex justify-between items-center h-16">
					<a
						href="#"
						className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
					>
						vaibhavmadan.in
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						<div className="flex items-center gap-6">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={`#${item.href}`}
									onClick={(e) => handleNavClick(e, item.href)}
									className="relative text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group py-2"
								>
									{item.label}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
								</a>
							))}
						</div>

						{/* Theme Toggle */}
						{/* <button
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
							aria-label="Toggle theme"
						>
							{resolvedTheme === 'dark' ? (
								<Sun className="w-5 h-5 text-white-500" />
							) : (
								<Moon className="w-5 h-5 text-zinc-600" />
							)}
						</button> */}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-4">
						{/* <button
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
							aria-label="Toggle theme"
						>
							{resolvedTheme === 'dark' ? (
								<Sun className="w-5 h-5 text-yellow-500" />
							) : (
								<Moon className="w-5 h-5 text-zinc-600" />
							)}
						</button> */}

						<button
							className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle menu"
						>
							{isOpen ? (
								<X className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
							) : (
								<Menu className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-xl bg-white/90 dark:bg-black/90 border-b border-zinc-200 dark:border-zinc-800">
						<div className="flex flex-col space-y-4 p-6">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={`#${item.href}`}
									onClick={(e) => handleNavClick(e, item.href)}
									className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
