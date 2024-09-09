import React from "react";


const First_hero_photo = () => {
	return (
		<div className="flex items-center justify-center space-x-[-20px] mt-10 ">
			<div className="rounded-full border-2 h-32 w-32 border-[#7a05ff33] bg-gradient-to-r from-transparent to-[#5d01c7]/30 text-[#ffffff] flex justify-center items-center font-medium text-[22px] ">
				<div className="text-center">
					<h3> 100%</h3>
					<h3> free </h3>
				</div>  
				
			</div>
			<img
				src={"https://res.cloudinary.com/dlnzvlft3/image/upload/v1700689286/Group_16_c7gluu.png"}
				width={200}
				height={200}
				className=" top-0  backdrop-blur-md"
			/>
		</div>
	);
};

export default First_hero_photo;
