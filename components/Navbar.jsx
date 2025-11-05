import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex gap-3.5 text-[20px]">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
        </div>
    )
}