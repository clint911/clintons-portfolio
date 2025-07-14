export default function About() {
  return (
    <div className="min-h-screen p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center transform -rotate-1">about me 🤓</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-200 border-3 border-black p-6 transform rotate-1">
              <h2 className="text-2xl font-bold mb-4">who am i?</h2>
              <p className="text-lg leading-relaxed">
                hey! i'm a passionate developer who loves building the internet infra & applications that power the digital experiences that make people smile. when i'm
                not coding, you'll find me doodling in notebooks or trying to perfect my coffee brewing skills ☕
              </p>
            </div>

            <div className="bg-yellow-200 border-3 border-black p-6 transform -rotate-1">
              <h2 className="text-2xl font-bold mb-4">what i do</h2>
              <ul className="text-lg space-y-2">
                <li>• backend wizardry with java & springboot</li>
                <li>• system design & security analysis </li>
                <li>• making websites go live (devops)</li>
                <li>• fullstack magic with NextJs/Remix/Express</li>
                <li>• smart contract magic with solidity & foundry</li>
                <li>• api wizardry with python & fast api</li>
                <li>• turning coffee into code</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-pink-200 border-3 border-black p-6 transform rotate-1">
            <h2 className="text-2xl font-bold mb-4">my superpowers 💪</h2>
            <div className="flex flex-wrap gap-3">
              {["Java", "springboot", "TypeScript", "React", "Next.js", "Remix", "Node.js", "Python", "fastapi", "solidity"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-green-300 border-2 border-black px-3 py-1 font-bold transform hover:rotate-3 transition-transform"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-orange-300 border-3 border-black p-4 inline-block transform -rotate-2">
              <p className="text-lg font-bold">"i believe a good website should feel like a warm hug"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
