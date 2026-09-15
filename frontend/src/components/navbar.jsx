function NavBar(){

    return (
        <nav className=" flex justify-between h-[80px] ">
            <h1 className="text-xl ml-[100px]">LOGO</h1>
            <ul className="flex ml-[100px] gap-[50px] list-none mr-[200px]">
                <li className="text-[25px] text-bold">Home</li>
                <li className="text-[25px] text-bold">About </li>
                <li className="text-[25px] text-bold">Feature</li>
                <li className="text-[25px] text-bold">Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar;