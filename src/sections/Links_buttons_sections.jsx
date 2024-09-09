import React from "react";


const Linky_buttons_sections = () => {
	return (
		<div className="flex justify-center items-center">
			<img
				src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1700766476/Line_9_xblvcz.png"
				alt=""
				width={150}
				height={500}
				className="h-[500px]"
			/>
			<div className="absolute w-[100%] space-y-5">
				<div className="h-14 border-2 border-[#3211FF] w-[80%] mx-auto text-white font-medium text-[20px] flex items-center px-5 rounded-lg bg-gradient-to-r from-transparent to-[#3211FF]/30 backdrop-blur-sm max-w-[500px]">
					<h2 className="flex-1">Facebook</h2>
					<img
						src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1700767863/Group_12_p4v4xg.png"
						alt=""
						className="h-8 "
						width={25}
						height={8}
					/>
				</div>
				<div className="h-14 border-2 border-[#00AD11] w-[80%] mx-auto text-white font-medium text-[20px] flex items-center px-5 rounded-lg bg-gradient-to-r from-transparent to-[#00AD11]/30  backdrop-blur-sm max-w-[500px]">
					<h2 className="flex-1">Whatsup</h2>
					<img
						src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1700768224/Group_13_kz8ubz.png"
						alt=""
						className="h-8 "
						width={25}
						height={8}
					/>
				</div>
				<div className="h-14 border-2 border-[#C10FFF] w-[80%] mx-auto text-white font-medium text-[20px] flex items-center px-5 rounded-lg bg-gradient-to-r from-transparent to-[#C10FFF]/30  backdrop-blur-sm max-w-[500px]">
					<h2 className="flex-1">Instagram</h2>
					<img
						src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1700768567/Group_14_hsiyju.png"
						alt=""
						className="h-8 "
						width={25}
						height={8}
					/>
				</div>
				<div className="h-14 border-2 border-[#0072F8] w-[80%] mx-auto text-white font-medium text-[20px] flex items-center px-5 rounded-lg bg-gradient-to-r from-transparent to-[#0072F8]/30  backdrop-blur-sm max-w-[500px]">
					<h2 className="flex-1">Linkedin</h2>
					<img
						src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1700769164/Group_15_hti8qt.png"
						alt=""
						className="h-8 "
						width={25}
						height={8}
					/>
				</div>
			</div>
			<div />
		</div>
	);
};

export default Linky_buttons_sections;
