import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'uccucoral@gmail.com', href: 'mailto:uccucoral@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
  { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Usaidjaved1' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/usaid-javed-5b3aa9341/' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/USAIDJAVED12353' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      toast.success('Message sent successfully!', { description: "I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    }
    setIsSubmitting(false);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={fadeUp}
            >
              // Contact
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              variants={fadeUp}
              custom={1}
            >
              <span className="gradient-text">Get In Touch</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUp}
              custom={2}
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info + Social Links */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    variants={fadeUp}
                    custom={index}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-muted-foreground mb-4">Follow me on social media:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={social.label}
                      variants={fadeUp}
                      custom={index + 3}
                      whileHover={{ scale: 1.1 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {['name','email','message'].map((field, index) => (
                <motion.div key={field} variants={fadeUp} custom={index}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder={field === 'email' ? 'john@example.com' : 'John Doe'}
                    />
                  ) : (
                    <textarea
                      id={field}
                      name={field}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell me about your project..."
                    />
                  )}
                </motion.div>
              ))}

              <motion.div variants={fadeUp} custom={3}>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
