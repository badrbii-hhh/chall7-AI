import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Watch, Shield, Award, Package, Star, ChevronDown, TrendingUp, Users, DollarSign, Clock3, GraduationCap, CheckCircle, Cpu, Zap, Layers, Database, Code, Terminal } from 'lucide-react';
import WatchDetails from './pages/WatchDetails';
import { Squares } from './components/ui/squares-background';
import { SparklesCore } from './components/ui/sparkles';
import { SparklesPreview } from './components/ui/sparkles-preview';
import { HeroGeometric } from './components/ui/hero-geometric';

interface WatchItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface WatchCardProps {
  watch: WatchItem;
}

interface CollectionSectionProps {
  title: string;
  watches: WatchItem[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="watch-card group"
    >
      <motion.div 
        className="watch-frame"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="corner-marker top-left"></div>
        <div className="corner-marker top-right"></div>
        <div className="corner-marker bottom-left"></div>
        <div className="corner-marker bottom-right"></div>
        
        <div className="watch-content">
          <motion.div 
            className="watch-image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img 
              src={watch.image} 
              alt={watch.name}
              className="watch-image"
            />
            <div className="watch-glow"></div>
          </motion.div>
          
          <div className="watch-info">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-white truncate flex-1">{watch.name}</h4>
                <span className="text-sm font-semibold text-accent-cyan ml-2">{watch.price}</span>
              </div>
              <p className="text-[11px] leading-tight text-text-secondary line-clamp-2">{watch.description}</p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-accent-cyan"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <span className="text-[10px] text-text-secondary">In Stock</span>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/watch/${watch.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="text-[10px] px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full hover:bg-accent-cyan/20 transition-colors"
                >
                  Details
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CollectionSection: React.FC<CollectionSectionProps> = ({ title, watches }) => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0">
      <Squares 
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(159, 111, 255, 0.1)"
        hoverFillColor="rgba(159, 111, 255, 0.05)"
        className="opacity-50"
      />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.h3 
        className="text-4xl font-display mb-12 gradient-text text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-text={title}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {watches.map((watch, index) => (
          <WatchCard key={index} watch={watch} />
        ))}
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: <Clock className="feature-icon" />,
    title: "Swiss Precision",
    description: "Each movement is crafted with unparalleled attention to detail and precision."
  },
  {
    icon: <Watch className="feature-icon" />,
    title: "Smart Integration",
    description: "Seamlessly blending traditional horology with cutting-edge technology."
  },
  {
    icon: <Shield className="feature-icon" />,
    title: "Lifetime Warranty",
    description: "Our commitment to quality is backed by a comprehensive lifetime warranty."
  },
  {
    icon: <Award className="feature-icon" />,
    title: "Award Winning",
    description: "Recognized globally for innovation in luxury watchmaking."
  },
  {
    icon: <Package className="feature-icon" />,
    title: "Custom Design",
    description: "Create your perfect timepiece with our bespoke design service."
  },
  {
    icon: <Star className="feature-icon" />,
    title: "Limited Editions",
    description: "Exclusive collections that push the boundaries of watch design."
  }
];

const socialProof = [
  {
    icon: <TrendingUp size={24} className="text-accent-purple" />,
    value: "1,500+",
    label: "Active Users",
    subtext: "Growing monthly"
  },
  {
    icon: <Award size={24} className="text-accent-purple" />,
    value: "98.7%",
    label: "Success Rate",
    subtext: "Client satisfaction"
  },
  {
    icon: <Clock3 size={24} className="text-accent-purple" />,
    value: "5.2hrs",
    label: "Saved Daily",
    subtext: "Per business"
  },
  {
    icon: <DollarSign size={24} className="text-accent-purple" />,
    value: "$12.8M",
    label: "Revenue Generated",
    subtext: "For our clients"
  }
];

const testimonials = [
  {
    name: "James Anderson",
    title: "CEO, Tech Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote: "MORCO AURA watches represent the perfect blend of tradition and innovation. The craftsmanship is unparalleled."
  },
  {
    name: "Sarah Chen",
    title: "Watch Collector",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote: "Each piece tells a unique story. The attention to detail and precision is remarkable."
  },
  {
    name: "Michael Roberts",
    title: "Luxury Retail Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "The customer service and product quality exceed all expectations. A true luxury experience."
  },
  {
    name: "Elena Rodriguez",
    title: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
    quote: "MORCO AURA sets new standards in watch design. Each collection is a masterpiece."
  }
];

const watches = [
  {
    name: "Quantum Chronograph",
    description: "Advanced chronograph with ceramic bezel and luminous indices",
    price: "$12,500",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nova Automatic",
    description: "Self-winding mechanism with 72-hour power reserve",
    price: "$8,900",
    image: "https://i.imgur.com/XR0Pj97.png"
  },
  {
    name: "Stellar GMT",
    description: "Dual time zones with meteorite dial finish",
    price: "$15,700",
    image: "https://i.imgur.com/mlZmMdA.png"
  }
];

const rolexWatches = [
  {
    name: "Daytona Cosmograph",
    description: "Precision chronograph with Oysterflex bracelet",
    price: "$34,500",
    image: "https://i.imgur.com/Tst9XCE.png"
  },
  {
    name: "Submariner Date",
    description: "Professional diver's watch with Cerachrom bezel",
    price: "$41,900",
    image: "https://i.imgur.com/XR0Pj97.png"
  },
  {
    name: "GMT-Master II",
    description: "Dual time zone functionality with Jubilee bracelet",
    price: "$38,700",
    image: "https://i.imgur.com/y76uMIB.png"
  }
];

const tissotWatches = [
  {
    name: "PRX Powermatic 80",
    description: "Integrated bracelet with automatic movement",
    price: "$3,900",
    image: "https://i.imgur.com/vgBjiJf.png"
  },
  {
    name: "Seastar 2000",
    description: "Professional dive watch with 600m water resistance",
    price: "$4,200",
    image: "https://i.imgur.com/EQAixxX.png"
  },
  {
    name: "Bilal MotoGP",
    description: "Limited edition chronograph with racing inspiration",
    price: "$3,500",
    image: "https://i.imgur.com/G4yTOZp.png"
  }
];

const apWatches = [
  {
    name: "Royal Oak Offshore",
    description: "Chronograph with ceramic bezel and tapisserie dial",
    price: "$185,000",
    image: "https://i.imgur.com/UmSZrWL.png"
  },
  {
    name: "Royal Oak Perpetual",
    description: "Perpetual calendar with grand tapisserie dial",
    price: "$235,000",
    image: "https://i.imgur.com/vvvZZGB.png"
  },
  {
    name: "Code 11.59",
    description: "Flying tourbillon with octagonal case middle",
    price: "$195,000",
    image: "https://i.imgur.com/ixbfMSP.png"
  }
];

const patekWatches = [
  {
    name: "Nautilus 5711",
    description: "Iconic sports watch with blue dial",
    price: "$285,000",
    image: "https://i.imgur.com/Afjfu0z.png"
  },
  {
    name: "Calatrava 5227",
    description: "Classic dress watch with hunter caseback",
    price: "$245,000",
    image: "https://i.imgur.com/RlEtTtn.png"
  },
  {
    name: "Grand Complications",
    description: "Perpetual calendar chronograph",
    price: "$395,000",
    image: "https://i.imgur.com/XoDc9Ex.png"
  }
];

const techSpecs = [
  {
    icon: <Cpu className="w-6 h-6 text-accent-purple" />,
    title: "Quantum Processing",
    description: "Next-gen neural network with advanced AI capabilities"
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-purple" />,
    title: "Neural Sync™",
    description: "Seamless integration with biological rhythms"
  },
  {
    icon: <Layers className="w-6 h-6 text-accent-purple" />,
    title: "Holographic Core",
    description: "Revolutionary 4D display technology"
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const arrowProgress = useTransform(scrollYProgress, [0.3, 0.7], ["30%", "70%"]);
  const arrowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const arrowScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 0.8]);
  const lineProgress = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  const scrollToCollection = () => {
    document.getElementById('latest-collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-primary text-white">
          <SparklesPreview />
          
          {/* Social Proof Section */}
          <section className="py-20 relative overflow-hidden bg-primary-dark">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialProof.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="stats-card bg-[#0A0D16] p-6 rounded-lg border border-[#1a1a1a] hover:border-accent-purple/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent-purple/10 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <h4 className="text-3xl font-bold text-accent-purple mb-2">{stat.value}</h4>
                    <p className="text-white/80 font-medium mb-1">{stat.label}</p>
                    <p className="text-white/60 text-sm">{stat.subtext}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="testimonial-card bg-[#1a1f36] rounded-lg p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-accent-purple/20"
                        />
                        <div>
                          <h5 className="font-medium text-white">{testimonial.name}</h5>
                          <p className="text-white/60 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-white/80 text-base leading-relaxed">{testimonial.quote}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="min-h-screen tools-section relative py-32">
            <div className="absolute inset-0 grid-pattern" />
            
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-sm font-display tracking-wider text-accent-yellow mb-4">A STEP-BY-STEP PATH</h2>
                <h3 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8">
                  TOOLS TO MAXIMISE<br />YOUR INCOME
                </h3>
              </motion.div>

              <div className="tools-grid">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="feature-card">
                    <GraduationCap className="feature-icon" />
                    <h4 className="feature-title">VITAL LIFE LESSONS</h4>
                    <div className="space-y-4">
                      {[
                        "World-class custom built learning application",
                        "Scale from Zero to $10k/month quickly",
                        "Master key skills for wealth generation"
                      ].map((text, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                          <p className="text-text-secondary">{text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                      alt="Learning Platform Interface"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                  </div>
                </motion.div>

                <div className="relative h-full flex justify-center">
                  <div className="vertical-line">
                    <motion.div 
                      className="arrow-indicator"
                      style={{ 
                        top: arrowProgress,
                        opacity: arrowOpacity
                      }}
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
                      alt="Network Dashboard"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                  </div>
                  <div className="feature-card">
                    <Users className="feature-icon" />
                    <h4 className="feature-title">PRIVATE NETWORK</h4>
                    <div className="space-y-4">
                      {[
                        "Celebrate your wins with people who understand",
                        "Access knowledge updated by the hour",
                        "Network with 113,500+ students"
                      ].map((text, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                          <p className="text-text-secondary">{text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Tech Watch Display Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(159,111,255,0.15)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(78,255,237,0.1)_0%,transparent_60%)]"></div>
            <div className="absolute w-full h-full">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full filter blur-[100px] animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Tech Specs */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-cyan"></div>
                        <h3 className="text-lg font-medium text-accent-purple tracking-wider">QUANTUM INNOVATION</h3>
                      </motion.div>
                      <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue relative">
                        Next Generation
                        <br />
                        Timepiece
                        <div className="absolute -inset-2 bg-gradient-to-r from-accent-purple/20 via-accent-cyan/20 to-accent-blue/20 blur-2xl -z-10"></div>
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {techSpecs.map((spec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-[#1a1f36]/40 to-[#0A0D16]/60 backdrop-blur-xl border border-white/10 hover:border-accent-purple/30 transition-all duration-500 group"
                        >
                          <div className="p-3 rounded-lg bg-accent-purple/10 group-hover:bg-accent-purple/20 transition-colors duration-300">
                            {spec.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-purple transition-colors duration-300">{spec.title}</h4>
                            <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{spec.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Column - Interactive Watch Display */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                  >
                    <div className="relative aspect-square rounded-full border border-white/10 p-8 backdrop-blur-xl bg-gradient-to-br from-[#1a1f36]/20 to-[#0A0D16]/40">
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 rounded-full"></div>
                      <div className="absolute inset-4 border border-white/20 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Rotating Elements */}
                          {[...Array(24)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="absolute w-full h-full"
                              style={{ transform: `rotate(${i * 15}deg)` }}
                            >
                              <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-gradient-to-b from-accent-purple/50 to-accent-cyan/50"></div>
                            </motion.div>
                          ))}
                          
                          {/* Center Elements */}
                          <div className="absolute inset-8 rounded-full border-2 border-accent-purple/50 flex items-center justify-center overflow-hidden">
                            <div className="absolute w-4 h-4 bg-accent-cyan rounded-full shadow-lg shadow-accent-cyan/50"></div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                              className="w-1 h-1/2 bg-gradient-to-t from-accent-purple to-accent-cyan origin-bottom"
                            ></motion.div>
                            
                            {/* Inner Circles */}
                            <div className="absolute inset-4 rounded-full border border-accent-cyan/30 animate-pulse"></div>
                            <div className="absolute inset-8 rounded-full border border-accent-purple/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Tech Specs */}
                    <motion.div
                      animate={{ y: [-10, 10] }}
                      transition={{ duration: 2, repeat: Infinity, yoyo: true }}
                      className="absolute -top-8 right-8 p-4 bg-gradient-to-r from-[#1a1f36]/80 to-[#0A0D16]/80 backdrop-blur-xl rounded-lg border border-accent-cyan/20"
                    >
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-accent-cyan" />
                        <p className="text-sm font-medium text-accent-cyan">Quantum Core v2.0</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [10, -10] }}
                      transition={{ duration: 2, repeat: Infinity, yoyo: true, delay: 1 }}
                      className="absolute -bottom-8 left-8 p-4 bg-gradient-to-r from-[#1a1f36]/80 to-[#0A0D16]/80 backdrop-blur-xl rounded-lg border border-accent-purple/20"
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-accent-purple" />
                        <p className="text-sm font-medium text-accent-purple">Neural Sync™</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section id="craftsmanship" className="py-20 tools-section relative">
            <div className="container mx-auto px-4">
              <motion.div 
                className="text-center mb-16"
                {...fadeInUp}
              >
                <h3 className="text-4xl font-display mb-6 gradient-text" data-text="EXCEPTIONAL CRAFTSMANSHIP">
                  EXCEPTIONAL CRAFTSMANSHIP
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Every MORCO AURA timepiece is a masterpiece of precision engineering and artistic excellence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.2 }}
                    className="feature-card"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="text-text-secondary">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Collections Sections */}
          <section id="latest-collection">
            <CollectionSection title="LATEST COLLECTION" watches={watches} />
          </section>
          <CollectionSection title="ROLEX COLLECTION" watches={rolexWatches} />
          <CollectionSection title="TISSOT COLLECTION" watches={tissotWatches} />
          <CollectionSection title="AUDEMARS PIGUET COLLECTION" watches={apWatches} />
          <CollectionSection title="PATEK PHILIPPE COLLECTION" watches={patekWatches} />

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <motion.h5 
                    className="font-display text-xl mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    MORCO AURA
                  </motion.h5>
                  <p className="text-text-secondary">Crafting tomorrow's classics today.</p>
                </div>
                <div>
                  <h6 className="font-medium mb-4">Collections</h6>
                  <ul className="space-y-2 text-text-secondary">
                    <motion.li whileHover={{ x: 5 }}>Chronograph</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Automatic</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Smart Fusion</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Limited Edition</motion.li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium mb-4">Support</h6>
                  <ul className="space-y-2 text-text-secondary">
                    <motion.li whileHover={{ x: 5 }}>Contact</motion.li>
                    <motion.li whileHover={{ x: 5 }}>FAQ</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Shipping</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Returns</motion.li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium mb-4">Follow Us</h6>
                  <ul className="space-y-2 text-text-secondary">
                    <motion.li whileHover={{ x: 5 }}>Instagram</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Twitter</motion.li>
                    <motion.li whileHover={{ x: 5 }}>Facebook</motion.li>
                    <motion.li whileHover={{ x: 5 }}>LinkedIn</motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      } />
      <Route path="/watch/:id" element={<WatchDetails />} />
    </Routes>
  );
}

export default App;