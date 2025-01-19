type FooterSectionProps = {
	title: string;
	children: React.ReactNode;
};
const FooterSection = ({ title, children }) => {
	return (
		<div className="md:w-1/4 w-full md:mb-0 mb-6">
			<h4 className="text-md font-semibold mb-2">{title}</h4>
			{children}
		</div>
	);
};

export default FooterSection;
