"use client";
import React, { useEffect } from "react";
// import { account } from "@/Appwrite/Appwrite_config";

const Footer = () => {
	return (
		<footer className=" text-white py-6 px-4 my-5 mt-40 border-t-2  border-t-white/20 mx-5">
			<div className="my-10">
				<h1 className="text-[20px]">Subscribe to ower news letter :</h1>
				<div className="flex justify-center items-center gap-3">
					<input type="text" className="bg-transparent border-2 flex-1 h-12 border-white/20 p-2 text-white my-2 rounded-[8px]" />
					<div className="w-12 h-12 bg-white/10 border-2 border-white/20 rounded-[8px] flex justify-center items-center p-1">
						<img
							src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1704140766/envoyer-un-e-mail_1_hpyel7.png"
							width={37}
							height={37}
							className=""
						/>
					</div>
				</div>
			</div>
			<div className="max-w-7xl  ">
				<div className="flex  ">
					<div className="">
						<div className=" flex items-start">
							<a href="/" className=" text-[22px]   font-bold">
								Linky
							</a>
						</div>
						<div className=" flex items-start">
							<h3 className="text-white/50 mt-2 font-light  text-left">
								Tout le contenu et les matériaux présents sur ce site sont © Linky 2024. Tous droits réservés.
							</h3>
						</div>
					</div>

					<div className="  flex-col space-y-3  w-[40%]  text-center">
						<div className=" flex items-end justify-end">
							<a href="/about" className="">
								Services
							</a>
						</div>
						<div className=" flex items-end justify-end">
							<a href="/about" className="">
								About
							</a>
						</div>

						<div className="flex items-end justify-end">
							<a href="/contact">Contact</a>
						</div>
					</div>
				</div>

				<p className="mt-10 text-gray-400 text-sm text-center">Copyright © 2024 Linky. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
