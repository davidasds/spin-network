import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
  Trophy,
  Users,
  Send,
  Search,
  Bell,
  Hash,
  Lock,
  Globe,
  Paperclip,
  Smile,
  MoreVertical
} from "lucide-react";

const Chat = () => {
  const [selectedChannel, setSelectedChannel] = useState("tournament-miami");
  const [message, setMessage] = useState("");

  const channels = [
    {
      id: "tournament-miami",
      name: "Miami Championship",
      type: "tournament",
      icon: Trophy,
      unread: 3,
      lastMessage: "Who's playing in the quarterfinals?",
      time: "2m ago"
    },
    {
      id: "lfg-doubles",
      name: "LFG - Doubles",
      type: "lfg",
      icon: Users,
      unread: 0,
      lastMessage: "Need 1 more for mixed doubles tomorrow",
      time: "15m ago"
    },
    {
      id: "grass-court-tips",
      name: "Grass Court Tips",
      type: "public",
      icon: Hash,
      unread: 12,
      lastMessage: "Best shoes for grass courts?",
      time: "1h ago"
    },
    {
      id: "dm-alex",
      name: "Alex Chen",
      type: "dm",
      avatar: "AC",
      unread: 1,
      lastMessage: "Great match today! Want to practice?",
      time: "3h ago"
    }
  ];

  const messages = [
    {
      id: "1",
      user: "Sarah Martinez",
      avatar: "SM",
      message: "Anyone know what time the semifinals start tomorrow?",
      time: "10:32 AM",
      isOwn: false
    },
    {
      id: "2",
      user: "You",
      avatar: "YO",
      message: "I think they start at 9 AM for the first matches",
      time: "10:33 AM",
      isOwn: true
    },
    {
      id: "3",
      user: "Michael Rodriguez",
      avatar: "MR",
      message: "Confirmed - 9 AM start. Court assignments will be posted tonight",
      time: "10:35 AM",
      isOwn: false
    },
    {
      id: "4",
      user: "Emma Thompson",
      avatar: "ET",
      message: "Thanks! Anyone want to warm up together before?",
      time: "10:36 AM",
      isOwn: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="h-[calc(100vh-64px)]">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            {/* Channels Sidebar */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Channels</h2>
                    <Button variant="ghost" size="icon">
                      <Bell className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="relative mt-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search channels..." className="pl-9" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[calc(100vh-250px)]">
                    <div className="space-y-1 p-3">
                      {channels.map((channel) => {
                        const Icon = channel.icon;
                        return (
                          <button
                            key={channel.id}
                            onClick={() => setSelectedChannel(channel.id)}
                            className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${
                              selectedChannel === channel.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-secondary"
                            }`}
                          >
                            {channel.avatar ? (
                              <Avatar className="w-10 h-10">
                                <AvatarFallback>{channel.avatar}</AvatarFallback>
                              </Avatar>
                            ) : Icon ? (
                              <div className="w-10 h-10 rounded-full bg-gradient-card flex items-center justify-center">
                                <Icon className="w-5 h-5" />
                              </div>
                            ) : null}
                            <div className="flex-1 text-left">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">{channel.name}</span>
                                {channel.unread > 0 && (
                                  <Badge variant="destructive" className="h-5 px-1.5 text-xs">
                                    {channel.unread}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs line-clamp-1 opacity-70">
                                {channel.lastMessage}
                              </p>
                              <p className="text-xs opacity-50 mt-1">{channel.time}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="h-full flex flex-col">
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Miami Championship</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="w-3 h-3" />
                          <span>Public Channel</span>
                          <span>•</span>
                          <span>247 members</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                {/* Messages */}
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{msg.avatar}</AvatarFallback>
                        </Avatar>
                        <div className={`max-w-[70%] ${msg.isOwn ? "text-right" : ""}`}>
                          <div className="flex items-center gap-2 mb-1">
                            {!msg.isOwn && (
                              <span className="text-sm font-medium">{msg.user}</span>
                            )}
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <div
                            className={`inline-block px-4 py-2 rounded-lg ${
                              msg.isOwn
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary"
                            }`}
                          >
                            {msg.message}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <CardContent className="border-t p-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && message.trim()) {
                          setMessage("");
                        }
                      }}
                      className="flex-1"
                    />
                    <Button variant="ghost" size="icon">
                      <Smile className="w-4 h-4" />
                    </Button>
                    <Button variant="tennis" size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
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

export default Chat;