import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Sparkles } from "lucide-react";

interface PricingCardProps {
  plan: {
    name: string;
    price: number;
    period: string;
    description: string;
    features: {
      text: string;
      included: boolean;
    }[];
    highlighted?: boolean;
    badge?: string;
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card 
      className={`relative transition-all duration-300 ${
        plan.highlighted 
          ? "shadow-xl scale-105 border-tennis-emerald premium-glow" 
          : "hover:shadow-lg"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="premium" className="gap-1">
            <Sparkles className="w-3 h-3" />
            {plan.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-8 pt-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">
            ${plan.price}
          </span>
          <span className="text-muted-foreground">/{plan.period}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {plan.features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              !feature.included ? "opacity-50" : ""
            }`}
          >
            {feature.included ? (
              <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            )}
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter className="pt-6">
        <Button 
          variant={plan.highlighted ? "premium" : "tennis"}
          className="w-full"
          size="lg"
        >
          {plan.price === 0 ? "Get Started Free" : "Upgrade Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}