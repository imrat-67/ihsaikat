
import React, { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import SocialIcon from '@/components/SocialIcon';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useToast } from "@/hooks/use-toast";
import { downloadCV } from '@/lib/utils';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use a service like EmailJS, Formspree, or a custom backend endpoint
      const response = await fetch('https://formspree.io/f/mleqwjzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        // Reset form and show success message
        setFormData({ name: '', email: '', message: '' });
        toast({
          title: "Message sent successfully",
          description: "Thank you for your message. I'll get back to you soon!",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <SectionContainer id="contact">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <span className="text-portfolio-red font-mono text-lg">06.</span>
          <h2 className="section-title inline-block ml-2">Contact</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-portfolio-white mb-6">Get In Touch</h3>
            <p className="text-portfolio-lightGray text-lg mb-10">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
            <div className={`transition-all duration-700 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="glass-card h-full">
                <h4 className="text-xl font-bold text-portfolio-white mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <SocialIcon 
                    href="mailto:imtiajhossain7862@gmail.com" 
                    icon={<Mail size={20} />} 
                    label="imtiajhossain7862@gmail.com"
                  />
                  
                  <SocialIcon 
                    href="tel:+8801708652827" 
                    icon={<Phone size={20} />} 
                    label="+8801708652827"
                  />
                  
                  <SocialIcon 
                    href="https://www.linkedin.com/in/imtiaj-hossain-saikat/" 
                    icon={<Linkedin size={20} />} 
                    label="Imtiaj Hossain Saikat"
                  />
                  
                  <SocialIcon 
                    href="https://github.com/imrat-67" 
                    icon={<Github size={20} />} 
                    label="imrat-67"
                  />
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#" 
                    onClick={downloadCV}
                    className="btn-primary text-lg"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="glass-card h-full">
                <h4 className="text-xl font-bold text-portfolio-white mb-6">Send Me a Message</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-lightGray mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-portfolio-darkBlue/50 border border-portfolio-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-red/50 text-portfolio-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-lightGray mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-portfolio-darkBlue/50 border border-portfolio-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-red/50 text-portfolio-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-portfolio-lightGray mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-portfolio-darkBlue/50 border border-portfolio-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-red/50 text-portfolio-white"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
