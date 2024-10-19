import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Francesco <span className="text-[hsl(280,100%,70%)]">Chiaramonte</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Personal Information →</h3>
            <div className="text-lg">
              Phone Number: (+39) 327 615 88 31
              Personal Email: fran.chiaramonte0@gmail.com
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">My Curriculum →</h3>
            <div className="text-lg">
             <a href="https://drive.google.com/file/d/1SeBYWzrQ36qbmj94q5idKQPSbeU397dQ/view?usp=drive_link"> Show CV </a>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
