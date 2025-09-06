import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Activity,
  MapPin,
  Calendar,
  Shield,
  Edit,
  Share2,
  TrendingUp,
  Target,
  Award,
  Clock,
  Users,
  BarChart3
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "John Smith",
    utr: 8.7,
    location: "San Francisco, CA",
    joinDate: "January 2024",
    verified: true,
    playStyle: ["Aggressive Baseliner", "Strong Backhand"],
    preferredSurface: "Hard Court",
    availability: ["Evenings", "Weekends"],
    wins: 47,
    losses: 23,
    winRate: 67,
    tournaments: 12,
    partners: 28
  };

  const achievements = [
    { icon: Trophy, label: "Tournament Winner", count: 3 },
    { icon: Users, label: "Partner Matches", count: 50 },
    { icon: Award, label: "Perfect Weeks", count: 8 },
    { icon: Target, label: "Win Streak", count: 7 }
  ];

  const recentMatches = [
    { opponent: "Alex Chen", result: "W", score: "6-4, 7-5", date: "2 days ago" },
    { opponent: "Sarah Martinez", result: "L", score: "4-6, 5-7", date: "5 days ago" },
    { opponent: "Jordan Williams", result: "W", score: "6-3, 6-2", date: "1 week ago" },
    { opponent: "Emma Thompson", result: "W", score: "7-6, 6-4", date: "1 week ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="w-24 h-24 border-4 border-tennis-court">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                    JS
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    {user.verified && (
                      <Shield className="w-6 h-6 text-tennis-emerald" />
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Activity className="w-4 h-4" />
                      <span className="font-medium">UTR {user.utr}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {user.playStyle.map((style) => (
                      <Badge key={style} variant="tennis">
                        {style}
                      </Badge>
                    ))}
                    <Badge variant="outline">{user.preferredSurface}</Badge>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="tennis" className="gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={TrendingUp}
              label="Win Rate"
              value={`${user.winRate}%`}
              subtitle={`${user.wins}W - ${user.losses}L`}
              color="text-success"
            />
            <StatCard
              icon={Trophy}
              label="Tournaments"
              value={user.tournaments}
              subtitle="3 wins"
              color="text-tennis-ball"
            />
            <StatCard
              icon={Users}
              label="Partners"
              value={user.partners}
              subtitle="94% match rate"
              color="text-tennis-emerald"
            />
            <StatCard
              icon={BarChart3}
              label="Ranking"
              value="#127"
              subtitle="Regional"
              color="text-tennis-wimbledon"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Matches */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Recent Matches</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-card rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            match.result === "W"
                              ? "bg-success/20 text-success"
                              : "bg-destructive/20 text-destructive"
                          }`}
                        >
                          {match.result}
                        </div>
                        <div>
                          <p className="font-medium">vs {match.opponent}</p>
                          <p className="text-sm text-muted-foreground">{match.score}</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {match.date}
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full">
                    View All Matches
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Achievements & Progress */}
            <div>
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">Achievements</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-card flex items-center justify-center">
                          <Icon className="w-5 h-5 text-tennis-wimbledon" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{achievement.label}</p>
                          <p className="text-xs text-muted-foreground">
                            {achievement.count} achieved
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Season Progress */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Season Progress</span>
                      <span className="text-sm text-muted-foreground">Level 8</span>
                    </div>
                    <Progress value={72} className="mb-2" />
                    <p className="text-xs text-muted-foreground">
                      280 points to next level
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  subtitle, 
  color 
}: { 
  icon: any; 
  label: string; 
  value: string | number; 
  subtitle: string; 
  color: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <Icon className={`w-5 h-5 ${color}`} />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
        <div className={`text-2xl font-bold ${color}`}>{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

export default Profile;