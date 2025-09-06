import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, Users, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-courts.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tennis courts aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-6">
          {/* Badge */}
          <Badge variant="premium" className="mx-auto animate-pulse-glow">
            <Sparkles className="w-3 h-3 mr-1" />
            Trusted by 50,000+ Tennis Players Worldwide
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Your Complete</span>
            <span className="block gradient-text">Tennis Ecosystem</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Discover tournaments, find perfect partners, track your UTR rating, 
            and connect with the global tennis community - all in one place.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <FeaturePill icon={Trophy} text="Tournament Discovery" />
            <FeaturePill icon={Users} text="Partner Matching" />
            <FeaturePill icon={MapPin} text="Local & Global" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/signup">
              <Button size="xl" variant="tennis" className="group">
                Start Playing Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/tournaments">
              <Button size="xl" variant="outline">
                Browse Tournaments
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
            <Stat number="50K+" label="Active Players" />
            <Stat number="5,000+" label="Tournaments" />
            <Stat number="98%" label="Match Rate" />
            <Stat number="4.9★" label="App Rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border">
      <Icon className="w-4 h-4 text-tennis-wimbledon" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold gradient-text">{number}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}