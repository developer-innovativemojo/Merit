
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, MousePointer } from 'lucide-react';
import RoleCard from './RoleCard';
import { Users, Handshake, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  const [demoMode, setDemoMode] = React.useState(false);
  const [activeAnimationCard, setActiveAnimationCard] = React.useState<number | null>(null);
  const [showCardIndicator, setShowCardIndicator] = React.useState(false);
  const [animationCompleted, setAnimationCompleted] = React.useState(false);
  const [soundEnabled, setSoundEnabled] = React.useState(false);
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Create audio element for sound effects
  React.useEffect(() => {
    audioRef.current = new Audio('/card-select.mp3');
    audioRef.current.volume = 0.2;
    return () => {
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, []);

  const handleCardHover = (index: number | null) => {
    if (!demoMode) {
      setActiveCard(index);
    }
  };

  const playSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
    }
  };

  // Handle demo animation sequence
  const handleDemoStart = () => {
    if (demoMode) return; // Prevent multiple triggers
    
    setDemoMode(true);
    setActiveCard(null);
    playSound();
    
    // Show a quick toast message
    toast({
      title: "Interactive Demo",
      description: "Explore our interactive demos",
      duration: 3000, // Auto-dismiss after 3 seconds
    });
    
    // Animate each card sequentially with delay
    setActiveAnimationCard(0);
    
    // Card 1 animation
    setTimeout(() => {
      playSound();
      setActiveAnimationCard(1);
    }, 1500);
    
    // Card 2 animation
    setTimeout(() => {
      playSound();
      setActiveAnimationCard(2);
    }, 3000);
    
    // Finish animation
    setTimeout(() => {
      setActiveAnimationCard(null);
      setShowCardIndicator(true);
      setAnimationCompleted(true);
    }, 4500);
  };

  return (
    <div className="max-w-6xl mx-auto text-center relative">
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
          <span className="text-primary font-extrabold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary/30">MERIT:</span> Faster Teaming, <br className="hidden md:block" />
          Smarter Matches, <br className="hidden md:block" />
          <span className="relative">
            Seamless Execution
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/60 animate-[expandWidth_1.8s_ease-in-out_forwards_0.8s]"></span>
          </span>
        </h1>
      </div>
      
      <div className={`relative py-12 mt-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className={`absolute left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent top-1/2 w-0 ${isVisible ? 'animate-expandHorizontal' : ''}`} style={{ animationDelay: '0.8s' }}></div>
        <div className={`absolute right-0 h-px bg-gradient-to-l from-transparent via-primary to-transparent top-1/2 w-0 ${isVisible ? 'animate-expandHorizontal' : ''}`} style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute left-0 w-2 h-2 rounded-full bg-primary top-1/2 transform -translate-y-1/2 opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]"></div>
        <div className="absolute right-0 w-2 h-2 rounded-full bg-primary top-1/2 transform -translate-y-1/2 opacity-0 animate-[fadeIn_0.5s_ease-out_1.5s_forwards]"></div>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Build Winning Teams Effortlessly with Our AI-Powered, <br className="hidden md:block" />
          Data-Driven Platform
        </p>
      </div>
      
      <div className={`mt-12 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-xl font-medium text-white mb-8 relative inline-block">
          I want to:
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/60 transform scale-x-0 animate-[expandWidth_1s_ease-in-out_forwards_1.8s]"></span>
        </p>
        
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <RoleCard 
            icon={<Handshake className={`h-12 w-12 text-primary transition-all duration-300 ${activeCard === 0 ? 'rotate-12 scale-110' : ''}`} />}
            title="Find Teaming Partners"
            description="Discover ideal partners for government contracts to enhance your proposal success rate"
            onClick={() => navigate('/teaming')}
            onMouseEnter={() => handleCardHover(0)}
            onMouseLeave={() => handleCardHover(null)}
            delay={0}
            isVisible={isVisible}
            isActive={activeAnimationCard === 0}
            showBadge={animationCompleted}
            isAnimated={demoMode}
          />
          
          <RoleCard 
            icon={<Users className={`h-12 w-12 text-primary transition-all duration-300 ${activeCard === 1 ? 'rotate-12 scale-110' : ''}`} />}
            title="Staff My Contract"
            description="Quickly identify and onboard the right talent to deliver on your contract obligations"
            onClick={() => navigate('/staffing')}
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={() => handleCardHover(null)}
            delay={0.15}
            isVisible={isVisible}
            isActive={activeAnimationCard === 1}
            showBadge={animationCompleted}
            isAnimated={demoMode}
          />
          
          <RoleCard 
            icon={<LineChart className={`h-12 w-12 text-primary transition-all duration-300 ${activeCard === 2 ? 'rotate-12 scale-110' : ''}`} />}
            title="Optimize My Talent"
            description="Maximize workforce efficiency and performance through data-driven talent management"
            onClick={() => navigate('/talent')}
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={() => handleCardHover(null)}
            delay={0.3}
            isVisible={isVisible}
            isActive={activeAnimationCard === 2}
            showBadge={animationCompleted}
            isAnimated={demoMode}
          />
        </div>

        {showCardIndicator && (
          <div className="flex justify-center mt-8 animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-white/90">
              <MousePointer size={16} className="animate-bounce" />
              <span className="text-sm">Select a role to explore</span>
            </div>
          </div>
        )}
        
        <div className="mt-16 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Button
              onClick={() => navigate('/signup')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg relative overflow-hidden group pulse-button"
            >
              <span className="relative z-10 flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
            
            <Button
              variant="outline"
              onClick={handleDemoStart}
              disabled={demoMode && !animationCompleted}
              className={`bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full flex items-center gap-2 relative ${demoMode && !animationCompleted ? 'opacity-70' : 'try-it-button'}`}
            >
              <Play size={18} className="text-primary animate-pulse" /> 
              Try It Out
              <span className="absolute inset-0 border border-white/30 rounded-full animate-ping-subtle opacity-0"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
