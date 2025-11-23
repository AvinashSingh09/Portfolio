import SectionWrapper from '../components/SectionWrapper';
import { profile } from '../data';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Terminal } from 'lucide-react';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="">
            <div className="text-center mb-16 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron tracking-wider">
                    ESTABLISH_UPLINK
                </h2>
                <div className="w-32 h-1 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
                <p className="text-neon-cyan font-share-tech mt-2 tracking-widest text-sm">
                    // WAITING_FOR_TRANSMISSION...
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="cyber-box p-8 rounded-sm">
                        <div className="cyber-corner cyber-corner-tl"></div>
                        <div className="cyber-corner cyber-corner-tr"></div>
                        <div className="cyber-corner cyber-corner-bl"></div>
                        <div className="cyber-corner cyber-corner-br"></div>

                        <h3 className="text-2xl font-bold text-white mb-6 font-orbitron flex items-center gap-2">
                            <Terminal className="text-neon-pink" />
                            COMM_CHANNELS
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700 group-hover:border-neon-cyan transition-colors">
                                    <Mail className="text-neon-cyan" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-sm font-share-tech uppercase tracking-wider mb-1">Electronic Mail</h4>
                                    <a href={`mailto:${profile.email}`} className="text-white hover:text-neon-purple transition-colors font-inter">
                                        {profile.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700 group-hover:border-neon-cyan transition-colors">
                                    <Phone className="text-neon-cyan" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-sm font-share-tech uppercase tracking-wider mb-1">Frequency</h4>
                                    <a href={`tel:${profile.phone}`} className="text-white hover:text-neon-purple transition-colors font-inter">
                                        {profile.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700 group-hover:border-neon-cyan transition-colors">
                                    <MapPin className="text-neon-cyan" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-sm font-share-tech uppercase tracking-wider mb-1">Base Coordinates</h4>
                                    <p className="text-white font-inter">{profile.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-neon-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all group">
                            <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group">
                            <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="cyber-box p-8 rounded-sm">
                    <div className="cyber-corner cyber-corner-tl"></div>
                    <div className="cyber-corner cyber-corner-tr"></div>
                    <div className="cyber-corner cyber-corner-bl"></div>
                    <div className="cyber-corner cyber-corner-br"></div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-neon-cyan font-share-tech text-sm mb-2 tracking-wider">
                                &gt; ENTER_IDENTITY
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all font-inter"
                                placeholder="Name_Sequence..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-neon-cyan font-share-tech text-sm mb-2 tracking-wider">
                                &gt; ENTER_RETURN_ADDRESS
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all font-inter"
                                placeholder="Email_Protocol..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-neon-cyan font-share-tech text-sm mb-2 tracking-wider">
                                &gt; ENTER_TRANSMISSION_DATA
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all font-inter resize-none"
                                placeholder="Message_Content..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-neon-purple/20 border border-neon-purple text-white font-orbitron font-bold py-4 rounded-sm hover:bg-neon-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            INITIATE_UPLOAD
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
