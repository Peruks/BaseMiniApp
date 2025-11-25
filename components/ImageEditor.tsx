"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, Save } from "lucide-react";
import { processImage, DEFAULT_OPTIONS, FilterOptions } from "@/lib/image-processing";
import { saveCreation } from "@/lib/storage";
import { useRouter } from "next/navigation";

export default function ImageEditor() {
    const router = useRouter();
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [options, setOptions] = useState<FilterOptions>(DEFAULT_OPTIONS);
    const [isProcessing, setIsProcessing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const img = new Image();
            img.onload = () => {
                setImage(img);
                setOptions(DEFAULT_OPTIONS);
            };
            img.src = URL.createObjectURL(file);
        }
    };

    useEffect(() => {
        if (image && canvasRef.current) {
            processImage(canvasRef.current, image, options);
        }
    }, [image, options]);

    const handleSave = async () => {
        if (!canvasRef.current) return;
        setIsProcessing(true);
        try {
            const dataUrl = canvasRef.current.toDataURL("image/png");
            await saveCreation(dataUrl, options.style);
            router.push("/profile");
        } catch (error) {
            console.error("Failed to save", error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDownload = () => {
        if (!canvasRef.current) return;
        const link = document.createElement("a");
        link.download = `basestyle-${Date.now()}.png`;
        link.href = canvasRef.current.toDataURL("image/png");
        link.click();
    };

    if (!image) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] p-6 text-center space-y-6">
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full max-w-xs aspect-square rounded-3xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center bg-dark-surface hover:bg-gray-900 hover:border-primary transition-all cursor-pointer group"
                >
                    <div className="p-4 rounded-full bg-gray-800 group-hover:bg-primary/20 transition-colors mb-4">
                        <Upload className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-lg font-medium text-gray-300">Upload Photo</p>
                    <p className="text-sm text-gray-500 mt-2">Tap to select from gallery</p>
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
        );
    }

    return (
        <div className="space-y-6 pb-24">
            <div className="relative w-full aspect-square bg-black shadow-2xl overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="px-6 space-y-6">
                <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-400">Style Preset</label>
                    <div className="grid grid-cols-4 gap-2">
                        {["none", "neon", "punk", "base"].map((style) => (
                            <button
                                key={style}
                                onClick={() => setOptions({ ...options, style: style as any })}
                                className={`py-2 px-1 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${options.style === style
                                        ? "bg-primary text-black border-primary shadow-[0_0_10px_rgba(14,165,161,0.4)]"
                                        : "bg-dark-surface text-gray-400 border-gray-800 hover:border-gray-600"
                                    }`}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Brightness</span>
                            <span>{options.brightness}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={options.brightness}
                            onChange={(e) => setOptions({ ...options, brightness: Number(e.target.value) })}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Contrast</span>
                            <span>{options.contrast}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={options.contrast}
                            onChange={(e) => setOptions({ ...options, contrast: Number(e.target.value) })}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                    <button
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-dark-surface border border-gray-700 rounded-xl text-white font-medium hover:bg-gray-800 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isProcessing}
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-black rounded-xl font-bold hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(14,165,161,0.3)]"
                    >
                        {isProcessing ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                            <Save className="w-4 h-4" />
                        )}
                        Save to Gallery
                    </button>
                </div>

                <button
                    onClick={() => setImage(null)}
                    className="w-full py-3 text-sm text-gray-500 hover:text-white transition-colors"
                >
                    Start Over
                </button>
            </div>
        </div>
    );
}
