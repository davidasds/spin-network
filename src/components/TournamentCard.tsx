import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  DollarSign,
  Clock,
  Star
} from "lucide-react";

interface TournamentCardProps {
  tournament: {
    id: string;
    name: string;
    date: string;
    location: string;
    surface: "hard" | "clay" | "grass";
    drawSize: number;
    entryFee: number;
    level: string;
    registeredPlayers: number;
    maxPlayers: number;
    rating?: number;
    imageUrl?: string;
  };
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const spotsLeft = tournament.maxPlayers - tournament.registeredPlayers;
  const isFilling = spotsLeft < 5;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Tournament Image */}
      {tournament.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={tournament.imageUrl}
            alt={tournament.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-3 left-3 flex gap-2">
            <Badge variant="tennis">{tournament.surface}</Badge>
            <Badge variant="secondary">{tournament.level}</Badge>
          </div>
        </div>
      )}

      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {tournament.name}
          </h3>
          {tournament.rating && (
            <div className="flex items-center gap-1 text-tennis-ball">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{tournament.rating}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Date & Time */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{tournament.date}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="line-clamp-1">{tournament.location}</span>
        </div>

        {/* Draw Size & Entry Fee */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>Draw: {tournament.drawSize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">${tournament.entryFee}</span>
          </div>
        </div>

        {/* Registration Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Registration</span>
            <span className={isFilling ? "text-warning font-medium" : "text-muted-foreground"}>
              {spotsLeft} spots left
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                isFilling ? "bg-warning" : "bg-tennis-wimbledon"
              }`}
              style={{
                width: `${(tournament.registeredPlayers / tournament.maxPlayers) * 100}%`,
              }}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="tennis" className="flex-1">
          <Trophy className="w-4 h-4 mr-2" />
          Register
        </Button>
        <Button variant="outline" size="icon">
          <Clock className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}