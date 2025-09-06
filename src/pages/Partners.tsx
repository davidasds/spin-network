import { useState } from "react";
import Navigation from "@/components/Navigation";
import PartnerCard from "@/components/PartnerCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Users,
  Target,
  Activity,
  MapPin,
  Sparkles,
  Filter,
  RefreshCw,
  Heart
} from "lucide-react";

const Partners = () => {
  const [utrRange, setUtrRange] = useState([6, 9]);
  const [distanceRange, setDistanceRange] = useState([25]);

  // Mock partner data
  const partners = [
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
      verified: true
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
    },
    {
      id: "3",
      name: "Jordan Williams",
      utr: 8.2,
      location: "Berkeley, CA",
      distance: 5.1,
      playStyle: ["Serve & Volley", "Net Player"],
      availability: ["Weekdays", "Evenings"],
      matchScore: 82,
      age: 25,
      experience: "Advanced",
      preferredSurface: "Grass Court",
      verified: false
    },
    {
      id: "4",
      name: "Emma Thompson",
      utr: 7.5,
      location: "Palo Alto, CA",
      distance: 12.3,
      playStyle: ["Defensive", "Counter Puncher"],
      availability: ["Weekends"],
      matchScore: 79,
      age: 30,
      experience: "Intermediate",
      preferredSurface: "Hard Court",
      verified: true
    },
    {
      id: "5",
      name: "Michael Rodriguez",
      utr: 9.0,
      location: "San Jose, CA",
      distance: 18.7,
      playStyle: ["Power Player", "Big Forehand"],
      availability: ["Mornings", "Weekdays"],
      matchScore: 76,
      age: 35,
      experience: "Expert",
      preferredSurface: "Hard Court",
      verified: true
    },
    {
      id: "6",
      name: "Lisa Park",
      utr: 8.0,
      location: "Redwood City, CA",
      distance: 15.2,
      playStyle: ["Tactical", "Mixed Pace"],
      availability: ["Evenings", "Weekends"],
      matchScore: 74,
      age: 27,
      experience: "Advanced",
      preferredSurface: "Clay Court",
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Find Your Perfect Partner</h1>
            <p className="text-lg text-muted-foreground">
              AI-powered matching to find players at your level
            </p>
          </div>

          {/* Match Score Explanation */}
          <Card className="mb-8 bg-gradient-card border-tennis-court/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-tennis-emerald" />
                <h3 className="font-semibold">How Match Scores Work</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Our AI analyzes UTR rating difference, location proximity, surface preferences, 
                availability overlap, and play style compatibility to generate a match score.
              </p>
              <div className="flex gap-4">
                <ScoreBadge score="90-100%" label="Perfect Match" color="text-success" />
                <ScoreBadge score="75-89%" label="Great Match" color="text-tennis-emerald" />
                <ScoreBadge score="60-74%" label="Good Match" color="text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filters
                    </h3>
                    <Button variant="ghost" size="sm">
                      Reset
                    </Button>
                  </div>

                  {/* UTR Range */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      UTR Range: {utrRange[0]} - {utrRange[1]}
                    </label>
                    <Slider
                      value={utrRange}
                      onValueChange={setUtrRange}
                      min={1}
                      max={14}
                      step={0.5}
                      className="mb-2"
                    />
                  </div>

                  {/* Distance */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Max Distance: {distanceRange[0]} miles
                    </label>
                    <Slider
                      value={distanceRange}
                      onValueChange={setDistanceRange}
                      min={1}
                      max={100}
                      step={1}
                    />
                  </div>

                  {/* Play Style */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Play Style</label>
                    <div className="space-y-2">
                      <FilterCheckbox label="Baseliner" />
                      <FilterCheckbox label="Serve & Volley" />
                      <FilterCheckbox label="All-Court" />
                      <FilterCheckbox label="Doubles Specialist" />
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Availability</label>
                    <div className="space-y-2">
                      <FilterCheckbox label="Mornings" />
                      <FilterCheckbox label="Afternoons" />
                      <FilterCheckbox label="Evenings" />
                      <FilterCheckbox label="Weekends" />
                    </div>
                  </div>

                  <Button variant="tennis" className="w-full">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Partners Grid */}
            <div className="lg:col-span-3">
              {/* Sorting Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Badge variant="tennis">
                    {partners.length} Matches Found
                  </Badge>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Sort by Match Score
                </Button>
              </div>

              {/* Partner Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partners.map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>

              {/* Load More */}
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More Partners
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Match CTA */}
          <Card className="mt-12 bg-gradient-hero text-white">
            <CardContent className="pt-8 pb-8 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Try Quick Match</h3>
              <p className="mb-6 opacity-90">
                Swipe through potential partners Tinder-style for faster matching
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-tennis-wimbledon hover:bg-white/90">
                Start Swiping
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

function ScoreBadge({ score, label, color }: { score: string; label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`font-bold ${color}`}>{score}</div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

function FilterCheckbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-border text-tennis-wimbledon focus:ring-tennis-wimbledon"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}

export default Partners;