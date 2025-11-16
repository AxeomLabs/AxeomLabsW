import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { Beaker, Bot, Sparkles, Shield, GraduationCap, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Beaker,
      title: 'Research',
      benefits: [
        'Public and private research projects',
        'Comprehensive literature reviews and analysis',
        'Data-driven insights and recommendations',
      ],
    },
    {
      icon: Bot,
      title: 'Robotics Development',
      benefits: [
        'Custom robotics system design',
        'Hardware and software integration',
        'Consulting on robotics projects',
      ],
    },
    {
      icon: Sparkles,
      title: 'AI Research & Engineering',
      benefits: [
        'Machine learning model development',
        'AI system architecture and implementation',
        'Ethical AI research and deployment',
      ],
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      benefits: [
        'Security system design and architecture',
        'Comprehensive security audits',
        'Vulnerability assessment and remediation',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Educational Programs',
      benefits: [
        'Portfolio building and project mentorship',
        'Institution support and curriculum development',
        'Workshops and training sessions',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Paid Guidance',
      benefits: [
        'One-on-one coaching and mentorship',
        'Career and project guidance',
        'Technical consultation and advice',
      ],
      note: 'Research only (not professional advice) for medical and legal fields',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive research, development, and guidance services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-card border border-card-border rounded-md p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us to discuss your project and how we can help you achieve your goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
