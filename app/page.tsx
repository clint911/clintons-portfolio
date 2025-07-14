import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 transform -rotate-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 transform rotate-1">
            hey there! 👋
            <br />
            <span className="text-pink-500">i'm Njogu Clinton</span>
          </h1>

          <div className="bg-yellow-300 border-3 border-black p-6 transform rotate-2 mb-8">
            <p className="text-xl md:text-2xl font-bold">
              i make cool stuff on the internet ✨
              <br />
              <span className="text-lg">developer • system architect • internet plumber • hecker</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="bg-green-400 border-3 border-black px-6 py-3 text-xl font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              check my work →
            </Link>
            <Link
              href="/about"
              className="bg-orange-400 border-3 border-black px-6 py-3 text-xl font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              about me →
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-pink-300 border-3 border-black p-4 transform rotate-1 inline-block">
          <p className="font-bold text-lg">"code is poetry in motion" - me, probably</p>
        </div>
      </div>
    </div>
  )
}
