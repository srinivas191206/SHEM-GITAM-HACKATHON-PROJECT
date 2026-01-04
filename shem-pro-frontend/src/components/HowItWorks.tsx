import React from 'react';
import { motion } from 'framer-motion';
import { BoltIcon, CpuChipIcon, CloudIcon, SparklesIcon } from '@heroicons/react/24/outline';

const steps = [
    {
        id: 1,
        title: 'Precision Sensing',
        description: 'ZMPT101B and SCT-013 sensors measure RMS voltage and current with high accuracy.',
        icon: <BoltIcon className="w-8 h-8 text-white" />,
        color: 'bg-blue-500',
    },
    {
        id: 2,
        title: 'Intelligent Processing',
        description: 'ESP32 controller computes real-time power, energy, and power factor.',
        icon: <CpuChipIcon className="w-8 h-8 text-white" />,
        color: 'bg-purple-500',
    },
    {
        id: 3,
        title: 'Smart Connectivity',
        description: 'Data streams via WiFi/MQTT to the Blynk 2.0 mobile dashboard.',
        icon: <CloudIcon className="w-8 h-8 text-white" />,
        color: 'bg-cyan-500',
    },
    {
        id: 4,
        title: 'AI Analysis',
        description: 'Gemini AI integration analyzes usage patterns for actionable insights.',
        icon: <SparklesIcon className="w-8 h-8 text-white" />,
        color: 'bg-green-500',
    },
];

const HowItWorks: React.FC = () => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);
    const leftSteps = steps.slice(0, 2);
    const rightSteps = steps.slice(2, 4);

    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How SHEM Works</h2>
                    <p className="text-xl text-gray-600">From raw data to smart energy decisions.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative">

                    {/* Left Column Steps */}
                    <div className="flex flex-col gap-6 lg:w-1/4">
                        {leftSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center lg:items-end text-center lg:text-right bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4 shadow-md`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Video Trigger */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group relative bg-black"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        {/* Thumbnail Image (Using YouTube Thumbnail) */}
                        <img
                            src="https://img.youtube.com/vi/NNFMUHOcq2o/maxresdefault.jpg"
                            alt="SHEM Introduction"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/50">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600 ml-1">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                            <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">Watch How It Works</span>
                        </div>
                    </motion.div>

                    {/* Right Column Steps */}
                    <div className="flex flex-col gap-6 lg:w-1/4">
                        {rightSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index + 2) * 0.2 }}
                                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4 shadow-md`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Video Modal */}
                {isVideoOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ margin: 0 }}>
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsVideoOpen(false)}
                        ></div>

                        {/* Modal Content */}
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/NNFMUHOcq2o?autoplay=1"
                                title="How SHEM Works"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HowItWorks;
