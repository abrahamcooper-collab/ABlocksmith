"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { business, navLinks } from "@/data/siteData";

/* ─── Dropdown Component ─── */
function Dropdown({
	items,
	isOpen,
}: {
	items: { label: string; href: string }[];
	isOpen: boolean;
}) {
	return (
		<div
			className={`absolute left-0 top-full min-w-[220px] bg-white rounded-md overflow-hidden transition-all duration-200 ${
				isOpen
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 -translate-y-2 pointer-events-none"
			}`}
			style={{ boxShadow: "var(--shadow-lg)" }}
		>
			{items.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors duration-150"
				>
					{item.label}
				</Link>
			))}
		</div>
	);
}

/* ─── Mobile Menu ─── */
function MobileMenu({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

	if (!isOpen) return null;

	return (
		<>
			<div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
			<div
				className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 overflow-y-auto animate-slide-in"
				style={{ boxShadow: "var(--shadow-lg)" }}
			>
				<div className="flex justify-end p-4">
					<button
						onClick={onClose}
						className="p-2 text-gray-600 hover:text-primary transition-colors"
						aria-label="Close menu"
					>
						<svg
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M18 6 6 18M6 6l12 12" />
						</svg>
					</button>
				</div>

				<nav className="px-4 pb-8">
					{navLinks.map((link) => (
						<div key={link.label}>
							<div className="flex items-center justify-between">
								<Link
									href={link.href}
									onClick={onClose}
									className="block py-3 text-sm font-semibold tracking-wide text-gray-800 hover:text-primary transition-colors"
								>
									{link.label}
								</Link>
								{link.dropdown && (
									<button
										onClick={() =>
											setExpandedDropdown(
												expandedDropdown === link.label ? null : link.label,
											)
										}
										className="p-2 text-gray-500 hover:text-primary transition-colors"
										aria-label={`Toggle ${link.label} submenu`}
									>
										<svg
											width="12"
											height="12"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											className={`transition-transform duration-200 ${
												expandedDropdown === link.label ? "rotate-180" : ""
											}`}
										>
											<path d="M2 4l4 4 4-4" />
										</svg>
									</button>
								)}
							</div>
							{link.dropdown && expandedDropdown === link.label && (
								<div className="pl-4 pb-2">
									{link.dropdown.map((sub) => (
										<Link
											key={sub.href}
											href={sub.href}
											onClick={onClose}
											className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
										>
											{sub.label}
										</Link>
									))}
								</div>
							)}
						</div>
					))}

					<a
						href={`tel:${business.phoneRaw}`}
						className="mt-6 block w-full text-center py-3 rounded-full font-semibold text-sm tracking-wide transition-colors duration-200"
						style={{
							backgroundColor: "var(--color-cta-bg)",
							color: "var(--color-cta-text)",
						}}
					>
						CALL US
					</a>
				</nav>

				<div className="border-t border-gray-200 px-4 py-5 space-y-3 text-sm text-gray-600">
					<a
						href={`tel:${business.phoneRaw}`}
						className="flex items-center gap-2 hover:text-primary transition-colors"
					>
						<PhoneIcon />
						{business.phone}
					</a>
					<a
						href={`mailto:${business.email}`}
						className="flex items-center gap-2 hover:text-primary transition-colors"
					>
						<EmailIcon />
						{business.email}
					</a>
					<p className="flex items-start gap-2">
						<MapPinIcon />
						<span>{business.address}</span>
					</p>
				</div>
			</div>
		</>
	);
}

/* ─── Icon Components ─── */
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

function PhoneIcon() {
	return <Phone size={16} strokeWidth={1.5} className="shrink-0" />;
}

function EmailIcon() {
	return <Mail size={16} strokeWidth={1.5} className="shrink-0" />;
}

function MapPinIcon() {
	return <MapPin size={16} strokeWidth={1.5} className="shrink-0 mt-0.5" />;
}

function ChevronDownIcon({ className }: { className?: string }) {
	return <ChevronDown size={14} strokeWidth={2} className={className} />;
}

/* ─── Main Navbar ─── */
export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleDropdownEnter = (label: string) => {
		if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
		setOpenDropdown(label);
	};

	const handleDropdownLeave = () => {
		dropdownTimeoutRef.current = setTimeout(() => {
			setOpenDropdown(null);
		}, 150);
	};

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	return (
		<header className="sticky top-0 z-50">
			{/* ── Top Contact Bar ── */}
			<div
				className="hidden md:block text-sm py-2.5"
				style={{
					backgroundColor: "var(--color-topbar-bg)",
					color: "var(--color-topbar-text)",
				}}
			>
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8 flex-wrap">
					<a
						href={`tel:${business.phoneRaw}`}
						className="flex items-center gap-2 hover:opacity-80 transition-opacity"
					>
						<PhoneIcon />
						<span>{business.phone}</span>
					</a>
					<a
						href={`mailto:${business.email}`}
						className="flex items-center gap-2 hover:opacity-80 transition-opacity"
					>
						<EmailIcon />
						<span>{business.email}</span>
					</a>
					<span className="flex items-center gap-2">
						<MapPinIcon />
						<span>{business.address}</span>
					</span>
				</div>
			</div>

			{/* ── Main Navigation ── */}
			<nav
				className="border-b border-gray-100"
				style={{
					backgroundColor: "var(--color-navbar-bg)",
					boxShadow: "var(--shadow-navbar)",
				}}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20 lg:h-[88px]">
					<Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
						<Image
							src="/logo.jpeg"
							alt="A & B Locksmiths LLC logo"
							width={64}
							height={64}
							className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
							priority
						/>
						<div className="leading-tight flex flex-col justify-center">
							<span
								className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight"
								style={{ color: "var(--color-primary)" }}
							>
								A &amp; B
							</span>
							<span className="block text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-semibold tracking-widest uppercase text-gray-500">
								Locksmiths LLC
							</span>
						</div>
					</Link>

					<div className="hidden lg:flex items-center gap-1">
						{navLinks.map((link) => (
							<div
								key={link.label}
								className="relative"
								onMouseEnter={() =>
									link.dropdown && handleDropdownEnter(link.label)
								}
								onMouseLeave={() => link.dropdown && handleDropdownLeave()}
							>
								<Link
									href={link.href}
									className="flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 rounded-md hover:text-primary"
									style={{ color: "var(--color-navbar-text)" }}
								>
									{link.label}
									{link.dropdown && (
										<ChevronDownIcon
											className={`transition-transform duration-200 ${
												openDropdown === link.label ? "rotate-180" : ""
											}`}
										/>
									)}
								</Link>
								{link.dropdown && (
									<Dropdown
										items={link.dropdown}
										isOpen={openDropdown === link.label}
									/>
								)}
							</div>
						))}
					</div>

					<div className="flex items-center gap-4">
						<a
							href={`tel:${business.phoneRaw}`}
							className="hidden lg:inline-flex items-center px-7 py-2.5 rounded-full text-[13px] font-bold tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
							style={{
								backgroundColor: "var(--color-cta-bg)",
								color: "var(--color-cta-text)",
							}}
						>
							CALL US
						</a>

						<button
							onClick={() => setMobileOpen(true)}
							className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
							aria-label="Open menu"
						>
							<svg
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</nav>

			<MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

			<style jsx global>{`
				@keyframes slideIn {
					from {
						transform: translateX(100%);
					}
					to {
						transform: translateX(0);
					}
				}
				.animate-slide-in {
					animation: slideIn 0.3s ease-out;
				}
			`}</style>
		</header>
	);
}
