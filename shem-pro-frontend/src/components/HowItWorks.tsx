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

                    {/* Center Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/NNFMUHOcq2o"
                            title="How SHEM Works"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
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
            </div>
        </section>
    );
};

export default HowItWorks;
