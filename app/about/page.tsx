import Layout from "@/components/Layout";
import { Github, Twitter } from "lucide-react";

export default function AboutPage() {
    return (
        <Layout>
            <div className="pt-6 px-6 pb-24 space-y-8">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-white">About BaseStyle</h1>
                    <p className="text-gray-400">
                        A client-side Farcaster Mini App that transforms your photos into Base-style neon punk art.
                    </p>
                </div>

                <div className="p-6 bg-dark-surface rounded-2xl border border-gray-800 space-y-4">
                    <h2 className="text-lg font-bold text-primary">Features</h2>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Client-side processing (Privacy first)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Offline capable (PWA)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Neon & Punk aesthetic filters
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Save to local gallery
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-white">Connect</h2>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            <Twitter className="w-4 h-4" />
                            Twitter
                        </a>
                    </div>
                </div>

                <div className="pt-8 text-center text-xs text-gray-600">
                    <p>v1.0.0 • Built for Farcaster</p>
                </div>
            </div>
        </Layout>
    );
}
