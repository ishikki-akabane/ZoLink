"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageSlideshow } from "@/components/image-slideshow"
import { LikeButton } from "@/components/like-button"
import { Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SimpleIcon from "@/components/icon";
import { User } from "@/lib/types"

interface MinimalistProfileProps {
    profile: User
}

export function MinimalistProfile({ profile }: MinimalistProfileProps) {
    const data = profile
    const handleCreate = () => {
        window.open("/", "_blank")
    }
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 py-16 max-w-2xl">
                {/* Clean, minimal header */}
                <div className="text-center mb-12">
                    <Avatar className="w-24 h-24 mx-auto mb-6 border border-gray-200 dark:border-gray-800">
                        <AvatarImage src={data.profile.avatar || "https://i.ibb.co/Y7ZRKmGD/83381b20d67747ed8c8d0d4afac89f37.jpg"} alt={data.profile.displayName} />
                        <AvatarFallback className="text-lg font-medium bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                            {data.profile.displayName
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>

                    <h1 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-2">{data.profile.displayName}</h1>
                    <Badge variant="outline" className="text-sm font-normal mb-4">
                        @{data.username}
                    </Badge>

                    {/* Minimal bio */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto mb-6">{data.profile.bio}</p>

                    <div className="flex justify-center space-x-4">
                        <LikeButton initialLikes={data.likes} uname={data.username} />
                        <Button
                            variant="outline" size="sm"
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
                            Share
                        </Button>
                    </div>
                </div>

                {/* Clean social links */}
                <div className="space-y-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 text-center">Connect</h3>

                    <div className="grid grid-cols-2 gap-3">
                        {data.profile.socialLinks
                            .filter((link: any) => link.visible)
                            .map((link: any) => {
                                return (
                                    <Card
                                        key={link.id}
                                        className="border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer group"
                                        onClick={() => window.open(link.url, "_blank")}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                                                    <SimpleIcon icon={link.icon} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">
                                                        {link.title}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500 capitalize">{link.platform}</p>
                                                </div>
                                                <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                    </div>
                </div>

                {/* Minimal footer */}
                <footer className="mt-auto text-center pt-16 space-y-4">
                    <div className="w-12 h-px bg-gray-300 dark:bg-gray-700 mx-auto"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Powered by <span className="font-medium">Zolink</span>
                    </p>
                    <Button variant="outline" onClick={handleCreate}>Create Your Profile</Button>
                </footer>
            </div>
        </div>
    )
}
