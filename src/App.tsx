import { useState } from 'react';
import Dock from './components/Dock';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { Home, Briefcase, Folder, Cpu, Mail } from 'lucide-react';
import VideoModal from './components/VideoModal';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoSelect = (url: string) => {
    setSelectedVideo(url);
    setIsModalOpen(true);
  };

  const handleNavClick = (id: string) => {
    setIsModalOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const dockItems = [
    {
      icon: <Home size={24} className="text-white" />,
      label: 'Home',
      onClick: () => handleNavClick('hero'),
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      label: 'Experience',
      onClick: () => handleNavClick('experience'),
    },
    {
      icon: <Folder size={24} className="text-white" />,
      label: 'Projects',
      onClick: () => handleNavClick('projects'),
    },
    {
      icon: <Cpu size={24} className="text-white" />,
      label: 'Skills',
      onClick: () => handleNavClick('skills'),
    },
    {
      icon: <Mail size={24} className="text-white" />,
      label: 'Contact',
      onClick: () => handleNavClick('contact'),
    },
  ];

  return (
    <>
      <div className="bg-neutral-950 min-h-screen text-neutral-50 relative selection:bg-neutral-800 selection:text-white">
        <div className="relative z-10 pb-24">
          <Dock items={dockItems} />
          <main>
            <Hero />
            <Experience />
            <Projects onVideoSelect={handleVideoSelect} />
            <Skills />
            <Contact />
          </main>
          <footer className="bg-neutral-950 py-6 text-center text-neutral-500 text-sm border-t border-neutral-900">
            <p>© {new Date().getFullYear()} Avinash Singh. All rights reserved.</p>
          </footer>

          <VideoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            videoUrl={selectedVideo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
