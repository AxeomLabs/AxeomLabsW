import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BadWaterForm from '@/components/BadWaterForm';
import { Users, Clock, Heart } from 'lucide-react';

export default function BadWater() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">BadWater Innovation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            BadWater Innovation is our free human-help portal. Ask a question. Get guidance from a real person. Almost No AI replies. No charge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="text-center">
            <CardHeader>
              <Users className="h-10 w-10 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">100% Human</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every response comes from a real person, not an AI system
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-10 w-10 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Thoughtful Replies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We take time to understand and provide meaningful guidance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-10 w-10 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Completely Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                No hidden fees, no subscriptions, just honest help
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-secondary/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Submit Your Question</CardTitle>
              <p className="text-muted-foreground">
                Tell us what you need help with. We'll review your question and a human will respond to your email.
              </p>
            </CardHeader>
            <CardContent>
              <BadWaterForm />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-card border border-card-border rounded-md p-6"
        >
          <h3 className="font-semibold mb-4">What to expect:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Response time: Usually within 24-48 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>We handle questions about homework, projects, career guidance, and research</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>All replies are written by humans based on our experience and knowledge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>For complex or paid consulting, we'll let you know and provide options</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
