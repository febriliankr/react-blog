import React from 'react'

const CustomTitlePage = ({title}) => {
	return (

		<div className="w-full pb-6 pt-6 bg-white text-brand ">
			<h1 className="text-center text-2xl font-bold lg:text-4xl">
				{title}
			</h1>
		</div>
	)
}

export default CustomTitlePage;
