import React from "react";
import flag from "../assets/flag_home.png"

const Big_first_title = () => {
	return (
		<div className="relative">
			<img src={flag} className="rounded-xl mx-5 mx-auto my-5 md:mx-auto h-20 w-auto mt-10"/>
			<div className="bg-[#ffa3a3] h-24 w-24 rounded-full blur-[200px] absolute left-[-30%]" />
			<h1 className="font-bold text-[50px] px-5 bg-clip-text text-transparent bg-gradient-to-r from-[#fdfeff] to-[#7d32f7] w-[320px] md:text-center md:w-[100%] md:mt-10 lg:px-[2%] mx-auto bg-red-300">
				Organisez vos réseaux sociaux de manière cohérente.
			</h1>
			<div className="flex" />
		</div>
	);
};

export default Big_first_title;
