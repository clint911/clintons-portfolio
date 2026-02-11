export default function CV() {
  return (
    <div className="min-h-screen p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 transform -rotate-1 inline-block">my cv 📄</h1>
            <p className="text-lg font-bold">(the fancy version of "what i've done")</p>
          </div>

          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-pink-200 border-3 border-black p-6 transform rotate-1">
              <h2 className="text-2xl font-bold mb-4">experience 💼</h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-black p-4">
                  <h3 className="text-xl font-bold">computer science industrial attachment</h3>
                  <p className="font-bold text-pink-600">safetyplus consulting ltd. may - aug • 2024</p>
                  <p className="mt-2">
                    managed hybrid cloud infra & ci/cd pipelines. development operations & system administration tasks.
                  </p>
                </div>

                <div className="bg-white border-2 border-black p-4">
                  <h3 className="text-xl font-bold">software engineer</h3>
                  <p className="font-bold text-pink-600">freelance software developer • 2024 - present</p>
                  <p className="mt-2">
                    engineering the business operational intelligence behind client projects, crafting robust APIs, integrating payment systems, and pioneering smart contract solutions that deliver real value and drive business success, turned coffee and pizza into beautiful user interfaces. shipped features that users actually used!
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-cyan-200 border-3 border-black p-6 transform -rotate-1">
              <h2 className="text-2xl font-bold mb-4">education 🎓</h2>

              <div className="bg-white border-2 border-black p-4">
                <h3 className="text-xl font-bold">maths & computer science</h3>
                <p className="font-bold text-cyan-600">jkuat • present</p>
                <p className="mt-2">
                  learned how to think like a computer (and still stay human). there are no solutions, only tradeoffs. mastered the art of googling my way through problems.
                </p>
              </div>
              
              <div className="bg-white border-2 border-black p-4">
                <h3 className="text-xl font-bold">Fullstack Software Development Bootcamp</h3>
                <p className="font-bold text-cyan-600">GoMyCodeKE • 2025</p>
                <p className="mt-2">
                  consolidated my software engineering skills through intensive training and hands-on projects.Learnt how to build prod-ready real-world applications, collaborate in teams, work with AI tools and navigate the software development lifecycle.
                </p>
                </div>
              </div>

            {/* Skills */}
            <div className="bg-yellow-200 border-3 border-black p-6 transform rotate-1">
              <h2 className="text-2xl font-bold mb-4">skills & tools 🛠️</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">languages i speak:</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "JavaScript", "TypeScript", "Solidity", "Python", "C++"].map((skill) => (
                      <span key={skill} className="bg-green-300 border-2 border-black px-2 py-1 text-sm font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">tools i love:</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Remix", "SpringBoot", "NodeJs", "Foundry", "FastAPI"].map((tool) => (
                      <span key={tool} className="bg-orange-300 border-2 border-black px-2 py-1 text-sm font-bold">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-green-200 border-3 border-black p-6 transform -rotate-1">
              <h2 className="text-2xl font-bold mb-4">cool stuff i've done 🏆</h2>

              <ul className="space-y-2 text-lg">
                <li>• winner of code beyond barriers hackathon 2023</li>
                <li>• performed arch linux blind install (first try!)</li>
                <li>• open source contributor (because sharing is caring)</li>
                <li>• built my own homelab server manager</li>
                <li>• can debug docker errors without crying (most of the time)</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-pink-400 border-3 border-black px-6 py-3 text-xl font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              download pdf version →
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
  }

