"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Image as ImageIcon, User, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { href: "/", icon: Home, label: "Home" },
        { href: "/convert", icon: ImageIcon, label: "Create" },
        { href: "/profile", icon: User, label: "Profile" },
        { href: "/about", icon: Info, label: "About" },
    ];

    return (
        <div className="flex flex-col min-h-screen max-w-md mx-auto bg-black border-x border-gray-800 shadow-2xl overflow-hidden">
            <main className="flex-1 overflow-y-auto pb-20 scrollbar-hide">
                {children}
            </main>

            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-t border-gray-800 max-w-md mx-auto">
                <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                                    isActive ? "text-primary" : "text-gray-500 hover:text-gray-300"
                                )}
                            >
                                <item.icon
                                    className={cn("w-6 h-6", isActive && "drop-shadow-[0_0_8px_rgba(14,165,161,0.5)]")}
                                />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
