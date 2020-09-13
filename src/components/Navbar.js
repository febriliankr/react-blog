import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebaseConfig'

const Navbar = ({ user }) => {
	return (

		<div className="w-full lg:w-3/4 xl:w-3/5 mx-auto p-6 bg-white text-brand">
			<div className=" flex items-center justify-between">
				<ul className="flex">
					<li className="mr-6">
						<Link to="/" className=" text-base hover:underline lg:text-lg hover:text-purple-200">
							<span>🔥</span>
						</Link>
					</li>
					<li className="mr-6">
						<Link to="/about" className=" text-base hover:underline lg:text-lg hover:text-purple-200">
						👻
						</Link>
					</li>
					<li className="mr-6">
						<Link to="/blog" className="text-base hover:underline lg:text-lg hover:text-purple-200">
						🧠
						</Link>
					</li>
					<li className="mr-6">
						<Link to="/chat" className="text-base hover:underline lg:text-lg hover:text-purple-200">
						💬
						</Link>
					</li>
				</ul>

				{
					user ? (
						<Link onClick={() => auth.signOut()} className="text-base hover:underline lg:text-lg hover:text-purple-200">
						❌
						</Link>
					) : (
						<Link to="/admin" className="text-base hover:underline lg:text-lg hover:text-purple-200">
						👨‍💻
						</Link>
					)
				}






			</div>

		</div>
	)
}

export default Navbar;
