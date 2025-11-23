import { useState } from 'react';
import Dock from './components/Dock';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { GridScan } from './components/GridScan';
import { Home, Briefcase, Folder, Cpu, Mail } from 'lucide-react';
import VideoModal from './components/VideoModal';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

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
      <LoadingScreen />
      <ScrollProgress />

      <div className="bg-black min-h-screen text-white relative">
        <div className="fixed inset-0 z-0">
          <GridScan
            scanColor="#9333ea" // Purple to match theme
            linesColor="#1f2937" // Dark gray
            scanOpacity={0.5}
            bloomIntensity={0.5}
            enableWebcam={false} // Default to false for privacy/performance
            scanDuration={8} // Slower scan (default was 2)
            scanDelay={6} // Longer pause between scans
            className=""
            style={{}}
          />
        </div>
        <div className="relative z-10 pb-32"> {/* Added padding-bottom for Dock */}
          <Dock items={dockItems} />
          <main>
            <Hero />
            <Experience />
            <Projects onVideoSelect={handleVideoSelect} />
            <Skills />
            <Contact />
          </main>
          <footer className="bg-black py-8 text-center text-gray-600 text-sm border-t border-gray-900">
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
