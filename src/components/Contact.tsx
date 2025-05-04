
import React, { useRef } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null); 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is null.");
      return;
    }
    
    // In a real implementation, this would send the data to a server
    emailjs.sendForm('service_bnj425t', 'template_oh3baxs', formRef.current, 'ttowYJCftsKzoSAGO')
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current?.reset();;
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        console.error("EmailJS Error:", error);
      });
  };
  
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-data-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-data-chart-1/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-gradient">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-accent to-data-accent-light mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Have a project in mind or interested in working together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-data-accent-light">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that needs data-driven insights, let's talk about how I can help you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-data-accent/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-data-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">ankitbodar001@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-data-accent/10 flex items-center justify-center mr-4">
                  <User className="w-5 h-5 text-data-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Surat, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-xl font-bold mb-6 text-data-accent-light">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 text-sm mb-1">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-data-darker border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white focus:outline-none focus:border-data-accent transition-colors"
                    required
                  />
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 text-sm mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-data-darker border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white focus:outline-none focus:border-data-accent transition-colors"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 text-sm mb-1">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-data-darker border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white focus:outline-none focus:border-data-accent transition-colors"
                    required
                  ></textarea>
                  <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-data-accent text-white rounded-lg hover:bg-data-accent-light transition-colors focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
