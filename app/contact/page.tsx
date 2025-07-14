export default function Contact() {
  return (
    <div className="min-h-screen p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transform -rotate-1 inline-block bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            let's chat! 💬
          </h1>
          <p className="text-xl font-bold">i promise i don't bite (much)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-pink-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-1">
            <h2 className="text-2xl font-bold mb-6">drop me a line ✍️</h2>

            <form className="space-y-4">
              <div>
                <label className="block font-bold mb-2">your name:</label>
                <input
                  type="text"
                  className="w-full border-3 border-black p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="what should i call you?"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">email:</label>
                <input
                  type="email"
                  className="w-full border-3 border-black p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">message:</label>
                <textarea
                  rows={5}
                  className="w-full border-3 border-black p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
                  placeholder="tell me something cool..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 border-3 border-black py-3 text-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                send it! 🚀
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-cyan-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
              <h3 className="text-xl font-bold mb-4">find me online 🌐</h3>

              <div className="space-y-3">
                <a
                  href="#"
                  className="block bg-white border-2 border-black p-3 font-bold hover:bg-pink-300 transition-colors"
                >
                  📧 clintonnjogu007@gmail.com
                </a>
                <a
                  href="#"
                  className="block bg-white border-2 border-black p-3 font-bold hover:bg-pink-300 transition-colors"
                >
                  🐦 @KingClingy
                </a>
                <a
                  href="#"
                  className="block bg-white border-2 border-black p-3 font-bold hover:bg-pink-300 transition-colors"
                >
                  💼 linkedin.com/in/clinton-njogu
                </a>
                <a
                  href="#"
                  className="block bg-white border-2 border-black p-3 font-bold hover:bg-pink-300 transition-colors"
                >
                  🐙 github.com/clint911
                </a>
              </div>
            </div>

            <div className="bg-green-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transform rotate-2">
              <h3 className="text-xl font-bold mb-4">fun facts 🎉</h3>
              <ul className="space-y-2 text-lg">
                <li>• i respond to emails within 24hrs</li>
                <li>• coffee meetings are my favorite</li>
                <li>• always up for a good project</li>
                <li>• terrible at small talk, great at big ideas</li>
              </ul>
            </div>

            <div className="bg-orange-200 border-3 border-black p-4 transform -rotate-1 text-center">
              <p className="font-bold text-lg">
                "the best time to plant a tree was 20 years ago.
                <br />
                the second best time is now."
                <br />
                <span className="text-base">- some wise person</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
