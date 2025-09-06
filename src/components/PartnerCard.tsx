import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star,
  MapPin,
  Activity,
  Calendar,
  MessageSquare,
  Heart,
  Shield
} from "lucide-react";

interface PartnerCardProps {
  partner: {
    id: string;
    name: string;
    avatarUrl?: string;
    utr: number;
    location: string;
    distance: number;
    playStyle: string[];
    availability: string[];
    matchScore: number;
    age?: number;
    experience: string;
    preferredSurface: string;
    verified: boolean;
  };
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  const matchColor = partner.matchScore >= 90 ? "text-success" : 
                     partner.matchScore >= 75 ? "text-tennis-emerald" : 
                     "text-muted-foreground";

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-tennis-court/20">
              <AvatarImage src={partner.avatarUrl} alt={partner.name} />
              <AvatarFallback className="bg-gradient-primary text-white">
                {partner.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{partner.name}</h3>
                {partner.verified && (
                  <Shield className="w-4 h-4 text-tennis-emerald" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">UTR {partner.utr}</span>
                {partner.age && (
                  <>
                    <span>•</span>
                    <span>{partner.age} years</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={`text-right ${matchColor}`}>
            <div className="text-2xl font-bold">{partner.matchScore}%</div>
            <div className="text-xs">match</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Location & Distance */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{partner.location}</span>
          <span className="text-tennis-wimbledon font-medium">
            {partner.distance}mi away
          </span>
        </div>

        {/* Play Styles */}
        <div className="flex flex-wrap gap-2">
          {partner.playStyle.map((style) => (
            <Badge key={style} variant="tennis" className="text-xs">
              {style}
            </Badge>
          ))}
        </div>

        {/* Experience & Surface */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span>{partner.experience}</span>
          </div>
          <Badge variant="outline">{partner.preferredSurface}</Badge>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <div className="flex gap-1 flex-wrap">
            {partner.availability.map((day) => (
              <span
                key={day}
                className="text-xs px-2 py-1 bg-secondary rounded-md"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="tennis" className="flex-1">
          <MessageSquare className="w-4 h-4 mr-2" />
          Message
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}