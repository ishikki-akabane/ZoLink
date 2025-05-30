"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LikeButton } from "@/components/like-button"
import { Share2, ExternalLink, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import SimpleIcon from "@/components/icon";
import { User } from "@/lib/types"

interface ActionProfileProps {
    profile: User
}

export function ActionProfile({ profile }: ActionProfileProps) {
    const data = profile
    const [energyPulse, setEnergyPulse] = useState(0)

    const handleCreate = () => {
        window.open("/", "_blank")
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setEnergyPulse((prev) => (prev + 1) % 3)
        }, 300)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-16 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-red-400 to-orange-500 opacity-80 transform rotate-12"></div>
                <div className="absolute top-32 right-0 w-40 h-1 bg-gradient-to-r from-orange-500 via-red-400 to-transparent opacity-80 transform -rotate-12"></div>
                <div className="absolute bottom-24 left-20 w-56 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-red-500 opacity-80 transform rotate-6"></div>

                <div className="absolute top-10 right-10 w-8 h-8 bg-red-500 transform rotate-45 opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-6 h-6 border-2 border-orange-400 transform rotate-45 opacity-60 animate-spin-slow"></div>
                <div className="absolute top-1/3 left-5 w-4 h-4 bg-yellow-400 transform rotate-45 opacity-60 animate-bounce"></div>
                <div className="absolute bottom-1/3 right-5 w-5 h-5 border-2 border-red-400 opacity-60 animate-pulse"></div>

                <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-orange-400 transform rotate-45 opacity-60"></div>
                <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-red-400 transform -rotate-45 opacity-60"></div>
                <div className="absolute bottom-1/4 right-1/4 w-20 h-0.5 bg-yellow-400 transform rotate-30 opacity-60"></div>
            </div>

            <div className="relative z-10 flex flex-col flex-grow container mx-auto px-4 py-8 max-w-4xl">
                <div className="text-center mb-8">
                    <div className="relative inline-block">
                        <div className="absolute -inset-10 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-40 blur-2xl animate-pulse"></div>

                        <div className="absolute -inset-8 border-2 border-red-400 rounded-full animate-spin opacity-60"></div>
                        <div
                            className="absolute -inset-6 border border-orange-400 rounded-full animate-spin-reverse opacity-40"
                            style={{ animationDuration: "3s" }}
                        ></div>
                        <div
                            className="absolute -inset-4 border border-yellow-400 rounded-full animate-spin opacity-30"
                            style={{ animationDuration: "2s" }}
                        ></div>

                        <div className="relative">
                            <Avatar className="w-32 h-32 border-4 border-orange-400 shadow-2xl shadow-red-500/50">
                                <AvatarImage src={data.profile.avatar || "https://i.ibb.co/Y7ZRKmGD/83381b20d67747ed8c8d0d4afac89f37.jpg"} alt={data.profile.displayName} />
                                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white">
                                    {data.profile.displayName
                                        .split(" ")
                                        .map((n: string) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>

                            <div
                                className={`absolute -inset-4 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full ${energyPulse === 0 ? "animate-ping" : ""}`}
                            ></div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent uppercase tracking-wider transform hover:scale-105 transition-transform">
                            {data.profile.displayName}
                        </h1>
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-1 font-bold uppercase tracking-wider">
                            @{data.username}
                        </Badge>

                        <Card className="glass-effect border-red-400/50 bg-gradient-to-r from-red-900/70 to-orange-900/70 relative max-w-lg mx-auto">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg opacity-30 blur-sm"></div>

                            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-red-400 transform rotate-45"></div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-orange-400 transform -rotate-45"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-orange-400 transform -rotate-45"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-red-400 transform rotate-45"></div>

                            <CardContent className="p-4 relative">
                                <div className="flex items-center justify-center mb-3">
                                    <div className="w-6 h-1 bg-gradient-to-r from-transparent to-red-400 mr-2"></div>
                                    <Zap className="w-4 h-4 text-orange-400 mr-1" />
                                    <span className="text-orange-400 font-bold uppercase tracking-wider text-xs">ABOUT</span>
                                    <Zap className="w-4 h-4 text-orange-400 ml-1" />
                                    <div className="w-6 h-1 bg-gradient-to-l from-transparent to-red-400 ml-2"></div>
                                </div>
                                <p className="text-sm leading-relaxed text-center text-white font-bold">{data.profile.bio}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center space-x-6 mt-8">
                        <LikeButton initialLikes={data.likes} uname={data.username} />
                        <Button
                            className="neon-button bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-6 py-2 uppercase tracking-wider"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator
                                        .share({
                                            title: data.profile.displayName,
                                            text: `Check out ${data.profile.displayName}'s Action Profile!`,
                                            url: window.location.href,
                                        })
                                        .catch((err) => console.error("Share failed:", err));
                                } else {
                                    alert("Sharing not supported on this device/browser.");
                                }
                            }}
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            SHARE
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="relative text-center mb-8">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                        <h3 className="text-2xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent uppercase tracking-wider bg-gray-900 px-4 inline-block">
                            🔥 CONNECT 🔥
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {data.profile.socialLinks
                            .filter((link: any) => link.visible)
                            .map((link: any, index: number) => {
                                const Icon = link.icon
                                return (
                                    <Card
                                        key={link.id}
                                        className="glass-effect border-red-400/30 bg-gradient-to-r from-red-900/70 to-orange-900/70 hover:scale-105 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-red-500/30 relative"
                                        onClick={() => window.open(link.url, "_blank")}
                                        style={{ animationDelay: `${index * 75}ms` }}
                                    >
                                        <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 transform rotate-45 opacity-60"></div>
                                        <CardContent className="p-3">
                                            <div className="flex items-center space-x-2">
                                                <div className="relative">
                                                    <div
                                                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-2 border-orange-400/50 transform rotate-3 group-hover:rotate-0`}
                                                        style={{ backgroundColor: link.color }}
                                                    >
                                                        <SimpleIcon icon={link.icon} className="w-5 h-5 text-white" />
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-black text-sm group-hover:text-orange-400 transition-colors text-white uppercase tracking-wide truncate">
                                                        {link.title}
                                                    </h3>
                                                    <p className="text-xs text-red-300 uppercase tracking-wider font-bold">{link.platform}</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-orange-400 group-hover:text-white transition-colors flex-shrink-0" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                    </div>
                </div>

                {/* Footer with energy lines */}
                <footer className="mt-auto text-center space-y-6 pt-16">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-16 h-1 bg-red-400 transform rotate-12"></div>
                        <div className="w-3 h-3 bg-orange-400 transform rotate-45"></div>
                        <div className="w-16 h-1 bg-yellow-400 transform -rotate-12"></div>
                    </div>
                    <div className="text-orange-300 font-bold uppercase tracking-wider text-sm">
                        POWERED BY{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">ZOLINK</span>
                    </div>
                    <Button className="neon-button bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-black px-8 py-3 text-base uppercase tracking-wider" onClick={handleCreate}>
                        CREATE ACTION PROFILE 💥
                    </Button>
                </footer>

            </div>
        </div>
    )
}
