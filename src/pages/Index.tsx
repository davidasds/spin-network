import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TournamentCard from "@/components/TournamentCard";
import PartnerCard from "@/components/PartnerCard";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Trophy, 
  Users, 
  Star, 
  Quote,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import tournamentImage from "@/assets/tournament-bracket.jpg";
import playerImage from "@/assets/player-racquet.jpg";

const Index = () => {
  // Sample data for demonstration
  const featuredTournaments = [
    {
      id: "1",
      name: "Summer Championship Series",
      date: "July 15-20, 2024",
      location: "Miami Tennis Center, FL",
      surface: "hard" as const,
      drawSize: 64,
      entryFee: 150,
      level: "Open",
      registeredPlayers: 58,
      maxPlayers: 64,
      rating: 4.8,
      imageUrl: tournamentImage
    },
    {
      id: "2",
      name: "Grass Court Classic",
      date: "July 22-25, 2024",
      location: "Newport Beach Club, CA",
      surface: "grass" as const,
      drawSize: 32,
      entryFee: 200,
      level: "UTR 7-9",
      registeredPlayers: 28,
      maxPlayers: 32,
      rating: 4.9,
      imageUrl: tournamentImage
    }
  ];

  const featuredPartners = [
    {
      id: "1",
      name: "Alex Chen",
      utr: 8.5,
      location: "San Francisco, CA",
      distance: 3.2,
      playStyle: ["Aggressive Baseliner", "Strong Serve"],
      availability: ["Weekends", "Evenings"],
      matchScore: 94,
      age: 28,
      experience: "Advanced",
      preferredSurface: "Hard Court",
      verified: true,
      avatarUrl: playerImage
    },
    {
      id: "2",
      name: "Sarah Martinez",
      utr: 7.8,
      location: "Oakland, CA",
      distance: 8.5,
      playStyle: ["All-Court", "Doubles Specialist"],
      availability: ["Mornings", "Weekends"],
      matchScore: 87,
      age: 32,
      experience: "Intermediate",
      preferredSurface: "Clay Court",
      verified: true
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: 0,
      period: "month",
      description: "Perfect for casual players",
      features: [
        { text: "Browse tournaments", included: true },
        { text: "Basic partner matching", included: true },
        { text: "Tournament chat access", included: true },
        { text: "UTR integration", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Priority support", included: false }
      ]
    },
    {
      name: "Pro",
      price: 9.99,
      period: "month",
      description: "For serious competitors",
      features: [
        { text: "All Free features", included: true },
        { text: "Verified UTR sync", included: true },
        { text: "Advanced partner matching", included: true },
        { text: "Performance analytics", included: true },
        { text: "Calendar integration", included: true },
        { text: "Priority support", included: false }
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Elite",
      price: 19.99,
      period: "month",
      description: "Professional level features",
      features: [
        { text: "All Pro features", included: true },
        { text: "Wearables integration", included: true },
        { text: "Video analysis tools", included: true },
        { text: "AI coaching insights", included: true },
        { text: "Tournament organizer tools", included: true },
        { text: "24/7 priority support", included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Featured Tournaments */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Tournaments</h2>
                <p className="text-muted-foreground">Top-rated tournaments happening near you</p>
              </div>
              <Link to="/tournaments">
                <Button variant="outline" className="gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTournaments.map(tournament => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </div>
        </section>

        {/* Partner Matching */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Top Partner Matches</h2>
                <p className="text-muted-foreground">AI-matched players perfect for your skill level</p>
              </div>
              <Link to="/partners">
                <Button variant="outline" className="gap-2">
                  Find Partners
                  <Users className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="tennis" className="mb-4">
                <Star className="w-3 h-3 mr-1" />
                Trusted by Champions
              </Badge>
              <h2 className="text-3xl font-bold">What Players Are Saying</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard 
                quote="Tennis Chat completely transformed how I find tournaments. The UTR integration is seamless!"
                author="Michael K."
                rating="UTR 9.2"
              />
              <TestimonialCard 
                quote="Found my perfect doubles partner through the app. We've won 3 tournaments together!"
                author="Jessica L."
                rating="UTR 7.5"
              />
              <TestimonialCard 
                quote="The analytics helped me identify weaknesses in my game. My win rate improved 40%!"
                author="David R."
                rating="UTR 8.8"
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="premium" className="mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                Choose Your Level
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground">
                Start free, upgrade when you're ready to go pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 50,000+ players already using Tennis Chat to dominate the court
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="xl" variant="secondary" className="gap-2 bg-white text-tennis-wimbledon hover:bg-white/90">
                  <CheckCircle className="w-5 h-5" />
                  Start Free Today
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="xl" variant="outline" className="gap-2 border-white text-white hover:bg-white/20">
                  Watch Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function TestimonialCard({ quote, author, rating }: { quote: string; author: string; rating: string }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-6">
        <Quote className="w-8 h-8 text-tennis-wimbledon/20 mb-4" />
        <p className="text-lg mb-4 italic">{quote}</p>
        <div className="border-t pt-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{rating}</p>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-tennis-ball text-tennis-ball" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Index;