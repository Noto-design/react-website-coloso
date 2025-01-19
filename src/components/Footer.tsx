import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT_INFO, QUICK_LINKS, SOCIAL_ICONS } from "../data/footer";
import FooterSection from "./layouts/FooterSection";

const Footer = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<footer className="mt-12" ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
				transition={{
					duration: 0.5,
					delay: 0.2,
				}}
				className="px-4 mx-auto"
			>
				<div className="md:flex md:justify-between">
					<FooterSection title="React Website">
						<p>Making high impact investments that transform lives.</p>
					</FooterSection>
					<FooterSection title="Quick Links">
						<ul className="flex flex-col gap-1">
							{QUICK_LINKS.map((Link, index) => (
								<li key={index}>
									<a href={Link.href} className="hover:text-slate-500 duration-100">
										{Link.label}
									</a>
								</li>
							))}
						</ul>
					</FooterSection>
					<FooterSection title="Contact Us">
						{CONTACT_INFO.map((info, index) => (
							<p key={index}>
								{info.label} {info.value}
							</p>
						))}
					</FooterSection>
					<FooterSection title="Follow Us">
						<div className="flex gap-4">
							{SOCIAL_ICONS.map((icon, index) => (
								<a key={index} href={icon.href}>
									{icon.icon}
								</a>
							))}
						</div>
					</FooterSection>
				</div>

				<div className="mt-5 border-t border-gray-700 py-4 text-sm text-center">
					© {new Date().getFullYear()} React.Website. All rights reserved
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
