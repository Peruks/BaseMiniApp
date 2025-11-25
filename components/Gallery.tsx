"use client";

import { useEffect, useState } from "react";
import { getCreations, deleteCreation } from "@/lib/storage";
import { Trash2, Download, Share2 } from "lucide-react";

export default function Gallery() {
    const [creations, setCreations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCreations();
    }, []);

    const loadCreations = async () => {
        try {
            const items = await getCreations();
            // Sort by date desc
            setCreations(items.sort((a, b) => b.createdAt - a.createdAt));
        } catch (error) {
            console.error("Failed to load gallery", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Delete this masterpiece?")) {
            await deleteCreation(id);
            loadCreations();
        }
    };

    const handleDownload = (dataUrl: string) => {
        const link = document.createElement("a");
        link.download = `basestyle-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
    };

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading gallery...</div>;
    }

    if (creations.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center p-6">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                    <Share2 className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Creations Yet</h3>
                <p className="text-gray-500">Start converting your images to see them here.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-4 p-4 pb-24">
            {creations.map((item) => (
                <div key={item.id} className="group relative aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                    <img
                        src={item.imageData}
                        alt="Creation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                            onClick={() => handleDownload(item.imageData)}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <Download className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-full text-red-500 transition-colors"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-[10px] font-bold uppercase text-primary tracking-wider">
                            {item.style}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
