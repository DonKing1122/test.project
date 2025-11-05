import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";


export default function Header(){


    return(
        <header className="flex justify-between bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-5">
            <div className="flex gap-2">
                <Image src={'/logo.svg'} alt="logo" width={30} height={30}></Image>
                <Link href={'/'} className="font-bold text-2xl">New Cook World</Link>
            </div>
            <Navbar />
            <Image src={'/favorites-white.svg'} alt="user" width={30} height={30}></Image>
        </header>
    )
}