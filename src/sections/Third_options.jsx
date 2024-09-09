import React from "react";

const Third_options = () => {
	return (
		<div className="mt-20 pt-0 relative flex justify-center items-center">
			<div>
				<div className="bg-purple-500 h-20  absolute w-[200px] rounded-full blur-[100px] opacity-20 left-[-200px]" />
				<div className="bg-white absolute h-40 w-[200px] rounded-full blur-[100px] opacity-20 left-[-200px]" />
				<img
					src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1700770335/Other_17_skix0x.png"
					alt=""
					className="mx-auto"
					width={300}
					height={50}
				/>
				<h2 className="text-white font-semibold text-[30px] text-center mx-auto w-[85%]">Masquer des informations et permettre aux gens de les demander</h2>
				<h2 className="text-white/50 font-normal text-[16px] text-center mx-auto w-[85%] mt-5">
				Permettre à certaines informations sensibles d'atteindre n'importe qui sans demander votre autorisation
				</h2>
			</div>
		</div>
	);
};

export default Third_options;
