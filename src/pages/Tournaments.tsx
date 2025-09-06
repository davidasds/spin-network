import { useState } from "react";
import Navigation from "@/components/Navigation";
import TournamentCard from "@/components/TournamentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  TrendingUp,
  Globe,
  Map
} from "lucide-react";
import tournamentImage from "@/assets/tournament-bracket.jpg";

const Tournaments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  // Mock tournament data
  const tournaments = [
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
    },
    {
      id: "3",
      name: "Clay Court Championships",
      date: "August 1-5, 2024",
      location: "Roland Garros Academy, TX",
      surface: "clay" as const,
      drawSize: 128,
      entryFee: 175,
      level: "UTR 5-7",
      registeredPlayers: 112,
      maxPlayers: 128,
      rating: 4.7,
      imageUrl: tournamentImage
    },
    {
      id: "4",
      name: "National Junior Open",
      date: "August 10-15, 2024",
      location: "USTA National Campus, FL",
      surface: "hard" as const,
      drawSize: 256,
      entryFee: 250,
      level: "U18",
      registeredPlayers: 198,
      maxPlayers: 256,
      rating: 5.0,
      imageUrl: tournamentImage
    },
    {
      id: "5",
      name: "Doubles Masters Tournament",
      date: "August 20-22, 2024",
      location: "Indian Wells Tennis Garden, CA",
      surface: "hard" as const,
      drawSize: 32,
      entryFee: 125,
      level: "Open Doubles",
      registeredPlayers: 24,
      maxPlayers: 32,
      rating: 4.6,
      imageUrl: tournamentImage
    },
    {
      id: "6",
      name: "Fall Classic Series",
      date: "September 5-10, 2024",
      location: "Central Park Tennis Center, NY",
      surface: "hard" as const,
      drawSize: 64,
      entryFee: 195,
      level: "UTR 8+",
      registeredPlayers: 42,
      maxPlayers: 64,
      rating: 4.8,
      imageUrl: tournamentImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Tournament Discovery</h1>
            <p className="text-lg text-muted-foreground">
              Find and join tournaments from USTA, ITF, and local clubs
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard icon={Globe} label="Active Tournaments" value="5,234" />
            <StatCard icon={MapPin} label="Locations" value="892" />
            <StatCard icon={Calendar} label="This Week" value="127" />
            <StatCard icon={TrendingUp} label="Avg Rating" value="4.8★" />
          </div>

          {/* Filters and Search */}
          <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tournaments, locations, or events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <Select value={selectedSurface} onValueChange={setSelectedSurface}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Surface" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Surfaces</SelectItem>
                    <SelectItem value="hard">Hard Court</SelectItem>
                    <SelectItem value="clay">Clay Court</SelectItem>
                    <SelectItem value="grass">Grass Court</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="utr5-7">UTR 5-7</SelectItem>
                    <SelectItem value="utr7-9">UTR 7-9</SelectItem>
                    <SelectItem value="utr9+">UTR 9+</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>

                {/* View Toggle */}
                <div className="flex gap-1 border rounded-lg p-1">
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    List
                  </Button>
                  <Button
                    variant={viewMode === "map" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("map")}
                    className="gap-1"
                  >
                    <Map className="w-4 h-4" />
                    Map
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex gap-2 mt-4">
              <Badge variant="tennis">Near Me (25mi)</Badge>
              <Badge variant="outline">Next 30 Days</Badge>
              <Badge variant="outline">Entry Fee &lt; $200</Badge>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Clear filters
              </Button>
            </div>
          </div>

          {/* Tournament Grid */}
          {viewMode === "list" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-lg p-8 h-[600px] flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Map View Coming Soon</p>
                <p className="text-muted-foreground">
                  See tournaments on an interactive map with cluster markers
                </p>
              </div>
            </div>
          )}

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Tournaments
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-card rounded-lg">
          <Icon className="w-5 h-5 text-tennis-wimbledon" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;