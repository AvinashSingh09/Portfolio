import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { profile } from '../data';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Terminal, CheckCircle, XCircle, Loader } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setErrorMessage('All fields are required');
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'ad802cb6-4f69-4849-b4f4-b67d9d903d06',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Contact from ${formData.name}`,
                    from_name: 'Portfolio Contact Form',
                    to_email: profile.email
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
            console.error('Form submission error:', error);
        }
    };

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

                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                            <CheckCircle size={64} className="text-neon-cyan mb-4 animate-pulse" />
                            <h3 className="text-2xl font-orbitron text-white mb-2">TRANSMISSION_SUCCESSFUL</h3>
                            <p className="text-gray-400 font-share-tech">Your message has been delivered. I'll respond soon!</p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-neon-cyan font-share-tech text-sm mb-2 tracking-wider">
                                    &gt; ENTER_IDENTITY
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all font-inter disabled:opacity-50"
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all font-inter disabled:opacity-50"
                                    placeholder="Email_Protocol..."
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-neon-cyan font-share-tech text-sm mb-2 tracking-wider">
                                    &gt; ENTER_TRANSMISSION_DATA
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    rows={4}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all font-inter resize-none disabled:opacity-50"
                                    placeholder="Message_Content..."
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/50 rounded-sm px-4 py-3">
                                    <XCircle size={20} />
                                    <span className="font-share-tech text-sm">{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-neon-purple/20 border border-neon-purple text-white font-orbitron font-bold py-4 rounded-sm hover:bg-neon-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader size={20} className="animate-spin" />
                                        TRANSMITTING...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        INITIATE_UPLOAD
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
