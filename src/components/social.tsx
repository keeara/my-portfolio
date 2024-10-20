import Link from "next/link";

export default function Social({text, href, color} : {text: string, href: string, color: string}){
return (
  <Link href={href} target="_blank"
    className={`flex w-fit items-center gap-2 rounded-full border-2 border-slate-100 px-4 py-1 text-sm  ${color}`}
  >
    {text}
  </Link>
);

}
