

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center w-1/4 mx-auto m-12">
            <p className="text-[#D99904] mb-2">{subHeading}</p>
            <p className="text-3xl font-bold border-y-4 py-3 mx-auto">{heading}</p>
            
        </div>
    );
};

export default SectionTitle;