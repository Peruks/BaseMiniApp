import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
            <div className="relative z-10 max-w-md w-full space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_15px_rgba(14,165,161,0.5)]">
                        BaseStyle Lab
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Transform your photos into neon-punk masterpieces.
                    </p>
                </div>

                <div className="grid gap-4">
                    <Link
                        href="/convert"
                        className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-black font-bold text-xl rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(14,165,161,0.3)]"
                    >
                        Start Creating
                    </Link>

                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/profile"
                            className="w-full py-3 px-4 bg-dark-surface border border-gray-800 hover:border-primary/50 text-white font-medium rounded-xl transition-all"
                        >
                            My Gallery
                        </Link>
                        <Link
                            href="/about"
                            className="w-full py-3 px-4 bg-dark-surface border border-gray-800 hover:border-primary/50 text-white font-medium rounded-xl transition-all"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            </div>
        </main>
    );
}
