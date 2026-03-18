import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { profile } from '../data';

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
            <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-50 tracking-tight">
                    Contact
                </h2>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                    <p className="text-neutral-400 text-base leading-relaxed mb-6">
                        I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-3">
                        <div>
                            <p className="text-neutral-500 text-xs font-medium mb-0.5">Email</p>
                            <a href={`mailto:${profile.email}`} className="text-neutral-50 hover:text-neutral-400 transition-colors text-sm">
                                {profile.email}
                            </a>
                        </div>
                        <div>
                            <p className="text-neutral-500 text-xs font-medium mb-0.5">Phone</p>
                            <a href={`tel:${profile.phone}`} className="text-neutral-50 hover:text-neutral-400 transition-colors text-sm">
                                {profile.phone}
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm hover:text-neutral-50 transition-colors underline decoration-neutral-800 underline-offset-4 hover:decoration-neutral-400">
                            GitHub
                        </a>
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm hover:text-neutral-50 transition-colors underline decoration-neutral-800 underline-offset-4 hover:decoration-neutral-400">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="md:w-2/3">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col justify-center py-8">
                            <h3 className="text-xl font-medium text-neutral-50 mb-1">Message Sent</h3>
                            <p className="text-neutral-400 text-sm">Thank you for reaching out. I'll respond shortly.</p>
                        </div>
                    ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-50 text-sm focus:outline-none focus:border-neutral-400 transition-colors disabled:opacity-50 placeholder-transparent peer"
                                        placeholder="Name"
                                    />
                                    <label htmlFor="name" className="absolute left-0 top-2 text-neutral-500 text-xs transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-neutral-400 peer-valid:-top-3 peer-valid:text-[10px] peer-valid:text-neutral-400 cursor-text">
                                        Name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-50 text-sm focus:outline-none focus:border-neutral-400 transition-colors disabled:opacity-50 placeholder-transparent peer"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="email" className="absolute left-0 top-2 text-neutral-500 text-xs transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-neutral-400 peer-valid:-top-3 peer-valid:text-[10px] peer-valid:text-neutral-400 cursor-text">
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    rows={3}
                                    className="w-full bg-transparent border-b border-neutral-800 py-2 text-neutral-50 text-sm focus:outline-none focus:border-neutral-400 transition-colors resize-none disabled:opacity-50 placeholder-transparent peer mt-2"
                                    placeholder="Message"
                                ></textarea>
                                <label htmlFor="message" className="absolute left-0 top-4 text-neutral-500 text-xs transition-all peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-neutral-400 peer-valid:-top-1 peer-valid:text-[10px] peer-valid:text-neutral-400 cursor-text">
                                    Message
                                </label>
                            </div>

                            {status === 'error' && (
                                <div className="text-red-400 text-xs py-1">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="bg-neutral-50 text-neutral-950 font-medium px-6 py-2 text-sm rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2 inline-flex items-center gap-2"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;