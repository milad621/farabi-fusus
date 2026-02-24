import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Fusus al-Hikam
            </h3>
            <p className="text-sm leading-relaxed">
              A multilingual digital edition of Abu Nasr al-Farabi&apos;s
              philosophical treatise, presenting 70 chapters on metaphysics,
              theology, and political philosophy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chapters"
                  className="hover:text-white transition-colors"
                >
                  Table of Contents
                </Link>
              </li>
              <li>
                <Link
                  href="/chapters/1"
                  className="hover:text-white transition-colors"
                >
                  Start Reading
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Project</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/milad621/farabi-fusus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <span className="text-gray-400">Open Source Project</span>
              </li>
              <li>
                <span className="text-gray-400">MIT License</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Fusus al-Hikam Digital Edition. Historical text
            in the public domain.
          </p>
          <p className="mt-2 text-gray-400">
            Persian translation by Mohi al-Din Mehdi Elahi Ghomshei
          </p>
        </div>
      </div>
    </footer>
  );
}
