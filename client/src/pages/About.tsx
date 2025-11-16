import { motion } from 'framer-motion';
import TeamMember from '@/components/TeamMember';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AxeomLabs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An interdisciplinary research and guidance lab dedicated to honest research and human-first technology.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="bg-card border border-card-border rounded-md p-8 space-y-4 text-muted-foreground">
            <p>
              AxeomLabs is a research-first studio building tools, knowledge and educational experiences. We believe honest research and human guidance unlock better futures for everyone — students, makers, and leaders alike.
            </p>
            <p>
              We research wide-ranging topics for the public and privately, spanning Robotics, Artificial Intelligence, Security Solutions, and Technology. Our target audience is everyone, from students working on school projects to executives tackling high-stakes systems.
            </p>
            <p>
              Paid guidance is available in almost all fields except medical and legal guidance (we do research there, but do not provide professional advice). Our company policy centers on total honesty, trust, and building long-term relationships.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-card-border rounded-md p-6 hover-elevate">
              <h3 className="text-xl font-semibold mb-3">Honesty</h3>
              <p className="text-sm text-muted-foreground">
                We prioritize truthful research and transparent communication in everything we do.
              </p>
            </div>
            <div className="bg-card border border-card-border rounded-md p-6 hover-elevate">
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-sm text-muted-foreground">
                Building lasting relationships based on reliability and consistent excellence.
              </p>
            </div>
            <div className="bg-card border border-card-border rounded-md p-6 hover-elevate">
              <h3 className="text-xl font-semibold mb-3">Human-First</h3>
              <p className="text-sm text-muted-foreground">
                Technology and research should serve people, not replace human judgment and care.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMember
              name="Vault"
              initials="V"
              vision="To build research that elevates real understanding and practical skills for everyone."
              role="Co-Founder"
            />
            <TeamMember
              name="Abhishek A S"
              initials="AA"
              vision="To push the frontiers of robotics and AI through ethical, human-first engineering."
              role="Co-Founder"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
