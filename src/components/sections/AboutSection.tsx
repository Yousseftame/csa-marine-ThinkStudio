import { motion } from 'framer-motion';
import { Anchor, Globe2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-off-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Side with Parallax/Overlap Effects */}
          <div className="lg:w-1/2 relative w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="/about-us.png" 
                alt="CSA Marine Port Operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
            </motion.div>

            {/* Overlapping Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-8 shadow-xl border-l-4 border-ocean z-20 flex flex-col items-center justify-center max-w-[200px]"
            >
              <Anchor className="text-ocean mb-4" size={40} strokeWidth={1.5} />
              <span className="text-4xl font-heading font-black text-navy leading-none mb-2">2016</span>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">
                Established Excellence
              </span>
            </motion.div>

            {/* Decorative Graphic */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gray-200/50 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="text-navy font-bold uppercase tracking-widest text-sm">About C.S.A Marine</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-navy leading-[1.1] mb-8 uppercase">
                A Leading Force in <span className="text-ocean">Egyptian Shipping</span>
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p>
                <strong className="text-navy font-semibold">CSA Marine</strong> is an Egyptian ship agency company established on 23 August 2016, specializing in full ship agency operations across all Egyptian maritime ports.
              </p>
              <p>
                With our deep understanding of local maritime regulations and strong relationships with port authorities, we guarantee seamless operations from arrival to departure. Our commitment is to provide fast, reliable, and cost-effective services to our global clients.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-8 pt-10 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-sm shadow-sm text-ocean shrink-0">
                  <Globe2 size={24} />
                </div>
                <div>
                  <p className="text-3xl font-heading font-black text-navy mb-1">100%</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Port Coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-sm shadow-sm text-ocean shrink-0">
                  <Anchor size={24} />
                </div>
                <div>
                  <p className="text-3xl font-heading font-black text-navy mb-1">End-to-End</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Service Guarantee</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
