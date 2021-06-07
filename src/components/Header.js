import React from "react";



function Header() {
    return (
        <div className="bg-white shadow text-gray-800">
            <header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="mr-3"/>
                    <h1 className="font-bold">Michigan State University Bootcamp Project</h1>
                </div>
                <a className="hover:text-yellow-500"></a>
            </header>
        </div>
    )
}

export default Header;