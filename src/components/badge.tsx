export default function Badge({text, color} : {text: string, color: string}){
return (
  <div
    className={`flex w-fit items-center gap-2 rounded-full border-2 border-slate-100 px-4 py-1 text-sm  ${color}`}
  >
    {text}
  </div>
);
}
