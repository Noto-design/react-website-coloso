import { motion } from "framer-motion";

const Header = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: "spring",
				dilay: 0.5,
				duration: 1,
				stiffiness: 150,
				damping: 15,
			}}
			className="py-2 flex justify-between items-center h-14"
		>
			<h1 className="lg:text-3xl font-bold md:text-xl">
				<a href="/">React Website</a>
			</h1>
			<nav className="hidden md:block">
				<ul className="flex gap-4 font-medium">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#service">Service</a>
					</li>
					<li>
						<a href="#ourmission">Our Mission</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</motion.div>
	);
};

export default Header;
