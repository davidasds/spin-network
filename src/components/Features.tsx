import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Users,
  MessageSquare,
  BarChart3,
  MapPin,
  Calendar,
  Shield,
  Sparkles,
  Smartphone,
  Globe,
  Activity,
  Target
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Tournament Aggregation",
    description: "Discover USTA, ITF, and local tournaments in one unified feed with real-time updates.",
    badge: "Live Data",
    color: "text-tennis-wimbledon"
  },
  {
    icon: Shield,
    title: "Verified UTR Integration",
    description: "Auto-sync your official UTR rating, match history, and rankings through secure OAuth.",
    badge: "Official",
    color: "text-tennis-emerald"
  },
  {
    icon: Users,
    title: "Smart Partner Matching",
    description: "AI-powered algorithm matches you with compatible partners based on skill, location, and play style.",
    badge: "98% Match Rate",
    color: "text-tennis-court"
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Tournament channels, LFG threads, and DMs with typing indicators and push notifications.",
    badge: "Instant",
    color: "text-tennis-bright"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track win rates, surface performance, fatigue levels, and match statistics.",
    badge: "Premium",
    color: "text-tennis-ball"
  },
  {
    icon: Activity,
    title: "Wearables Integration",
    description: "Connect smart racquets and fitness trackers for comprehensive match data.",
    badge: "IoT",
    color: "text-accent"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="premium" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Complete Tennis Ecosystem
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Level Up</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From tournament discovery to performance analytics, we've built the ultimate platform for serious tennis players.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-card ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="tennis" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <FeatureItem icon={Globe} text="Global Coverage" />
          <FeatureItem icon={Smartphone} text="Mobile First" />
          <FeatureItem icon={MapPin} text="Local Courts" />
          <FeatureItem icon={Target} text="Skill Matching" />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-tennis-court/50 transition-colors">
      <Icon className="w-5 h-5 text-tennis-wimbledon" />
      <span className="font-medium">{text}</span>
    </div>
  );
}