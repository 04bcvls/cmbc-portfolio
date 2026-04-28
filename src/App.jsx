import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStacks from './components/TechStacks';
import Affiliation from './components/Affiliation';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-[#0d0b2b] text-white font-dmSans min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStacks />
      <Affiliation />
      <BackToTop />

      {/* Footer */}
      <footer className="bg-[#1f1540] py-8 border-t border-[#2e2a5e]">
        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
            {/* Brand Part */}
            <div className="space-y-3 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <a href="#hero"><img
                  src="./assets/cmbc_clouddancelglass.png"
                  alt="CMBC Logo"
                  className="w-10 h-10 object-contain"
                /></a>

                <div>
                  <p className="font-montserrat font-extrabold text-sm text-[#E1FFFF]"><a href="#hero">cmbc</a></p>
                  <p className="font-dmSans text-xs text-[#a0aec0]">by Christian Mari Civiles</p>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <p className="font-montserrat font-extrabold text-md tracking-widest text-white mb-4">REACH OUT</p>
              <div className="space-y-2">
                {/* School Email */}
                <a
                  href="mailto:cmbciviles@addu.edu.ph"
                  className="flex items-center gap-2 text-[#a0aec0] hover:text-[#7c3aed] transition-colors break-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="font-dmSans text-sm">cmbciviles@addu.edu.ph</span>
                </a>

                {/* Proff Email */}
                <a
                  href="mailto:chrismariciviles@gmail.com"
                  className="flex items-center gap-2 text-[#a0aec0] hover:text-[#7c3aed] transition-colors break-all"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="font-dmSans text-sm">chrismariciviles@gmail.com</span>
                </a>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/04bcvls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/chrismariciviles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.829 0-9.744h3.554v1.379c-.009.015-.021.029-.03.042h.03v-.042c.44-.678 1.236-1.645 3.008-1.645 2.198 0 3.845 1.43 3.845 4.505v5.505zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.946-1.715 1.177 0 1.915.762 1.915 1.715 0 .953-.738 1.715-1.946 1.715zm1.595 11.597H3.762V9.558h3.17v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/beebuhhcvls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0aec0] hover:text-[#7c3aed] transition-colors"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.777 2.231.569 6.697.012 8.183 0 8.607 0 12s.012 3.817.07 5.303c.208 4.466 2.127 6.419 6.593 6.627 1.279.058 1.704.07 4.907.07 3.204 0 3.628-.012 4.907-.07 4.466-.208 6.406-2.159 6.614-6.627.058-1.485.07-1.91.07-5.303 0-3.393-.012-3.817-.07-5.303-.208-4.466-2.144-6.44-6.614-6.627C15.628.012 15.203 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#2e2a5e] mb-6" />

          {/* Bottom Section */}
          <div className="flex items-center justify-center text-xs text-[#a0aec0]/60">
            <span>© 2026 cmbc Portfolio. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
