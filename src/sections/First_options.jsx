import React from "react";


const First_options = () => {
	return (
		<div className=" relative mt-[0px]">
			<div className="bg-purple-500  absolute h-40 w-[100px] rounded-full blur-[200px] opacity-20 right-[-200px]" />
			<div className="bg-white absolute h-40 w-[200px] rounded-full blur-[200px] opacity-40 right-[-200px]" />
			<img
				src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1701603233/Other_19_vgirvj.png"
				alt=""
				className="mx-auto"
				width={300}
				height={50}
			/>
			<h2 className="text-white font-semibold text-[30px] text-center mx-auto w-[85%]">Créez votre présence en ligne/entreprise avec Linky</h2>
			<h2 className="text-white/50 font-normal text-[16px] text-center mx-auto w-[85%] mt-5">
				Dans le monde numérique d'aujourd'hui, <span className='font-semibold text-white'>Linky</span> simplifie votre présence en ligne en regroupant tous vos liens dispersés sur une seule plateforme
				organisée.
			</h2>
		
		</div>
	);
};

export default First_options;
