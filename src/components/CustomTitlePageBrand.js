import React from 'react'

const CustomTitlePage = ({title}) => {
	return (

		<div className="w-full bg-gray-100 pb-6 pt-6 bg-brand text-white ">
			<h1 className="text-center text-2xl font-bold lg:text-4xl">
				{title}
			</h1>
		</div>
	)
}

export default CustomTitlePage;
