export default function Projects() {
  const projects = [
    {
      title: "lithium labs",
      description:
        "your awesome one stop software solutions shop built with react & some magic ✨",
      tech: ["React", "NextJs", "Tailwind"],
      color: "bg-pink-300",
      liveUrl: "https://lithiumlabs.vercel.app",
    },
    {
      title: "lionxeco",
      description:
        "Digital Creatives platform for modern internet creators Your favorite community for navigating the complexities of Web2 and Web3. From modern payment systems to community based secure smart contracts for content based reward distribution. 🚀! 🌤️",
      tech: ["Next.js", "API", "Solidity"],
      color: "bg-cyan-300",
      liveUrl: "https://lionxeco.net",
    },
    {
      title: "portfolio v4",
      description: "the website you're looking at right now! meta, right? 🤯",
      tech: ["Next.js", "Tailwind", "Love"],
      color: "bg-yellow-300",
      liveUrl: "https://clintons.vercel.app",
    },
    {
      title: "alliance app",
      description: "internal human resource management tool 😄💬",
      tech: ["SpringBoot", "NextJs", "Tailwind"],
      color: "bg-green-300",
      liveUrl: "https://alliance.xyz",
    },
  ];

  return (
    <div className="min-h-screen p-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transform -rotate-1 inline-block bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            my projects 🚀
          </h1>
          <p className="text-xl font-bold mt-6">
            stuff i've built (and actually finished!)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transform ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 transition-transform`}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-lg mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border-2 border-black px-2 py-1 text-sm font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
                >
                  view live →
                </a>
                <button className="bg-white border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">
                  code →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-orange-300 border-3 border-black p-6 inline-block transform rotate-2">
            <p className="text-lg font-bold">
              more projects coming soon...
              <br />
              <span className="text-base">my brain never stops! 🧠⚡</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
