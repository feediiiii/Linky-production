import React from 'react'


const Second_options = () => {
  return (
    <div className="mt-20">
        <div className='flex justify-center items-center relative'>
        <img
					src="https://res.cloudinary.com/dlnzvlft3/image/upload/v1703456392/Ikbal_4_rbfghb.png"
					alt=""
					className="z-10"
					width={300}
					height={50}
				/>
                <img
				src={"https://res.cloudinary.com/dlnzvlft3/image/upload/v1700689286/Group_16_c7gluu.png"}
				width={200}
				height={200}
				className=" top-0 absolute backdrop-blur-md left-[53%] z-5"
			/>
        </div>
				
				<h2 className="text-white font-semibold text-[30px] text-center mx-auto w-[85%]">Générez votre propre code QR</h2>
				<h2 className="text-white/50 font-normal text-[16px] text-center mx-auto w-[85%] mt-5">
                Avec <span className='font-semibold text-white'>Linky</span>, mettez tout en ligne et obtenez un QR code pour que les gens puissent accéder facilement à votre profil en le scannant.
				</h2>
			</div>
  )
}

export default Second_options