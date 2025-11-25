export interface FilterOptions {
    brightness: number;
    contrast: number;
    saturation: number;
    hue: number;
    style: "none" | "neon" | "punk" | "base";
}

export const DEFAULT_OPTIONS: FilterOptions = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0,
    style: "none",
};

export async function processImage(
    canvas: HTMLCanvasElement,
    image: HTMLImageElement,
    options: FilterOptions
) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset canvas dimensions to match image
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // Draw original image
    ctx.drawImage(image, 0, 0);

    // Apply basic filters
    ctx.filter = `brightness(${options.brightness}%) contrast(${options.contrast}%) saturate(${options.saturation}%) hue-rotate(${options.hue}deg)`;
    ctx.drawImage(image, 0, 0);
    ctx.filter = "none"; // Reset filter for overlays

    // Apply Style Overlays
    if (options.style === "neon") {
        applyNeonEffect(ctx, canvas.width, canvas.height);
    } else if (options.style === "punk") {
        applyPunkEffect(ctx, canvas.width, canvas.height);
    } else if (options.style === "base") {
        applyBaseEffect(ctx, canvas.width, canvas.height);
    }
}

function applyNeonEffect(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.globalCompositeOperation = "overlay";

    // Teal/Pink Gradient Overlay
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(14, 165, 161, 0.5)"); // #0ea5a1
    gradient.addColorStop(1, "rgba(255, 77, 109, 0.5)"); // #ff4d6d

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "source-over";
}

function applyPunkEffect(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.globalCompositeOperation = "color-dodge";

    // High contrast noise/grain simulation (simplified with color)
    ctx.fillStyle = "rgba(255, 0, 255, 0.2)";
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgba(0, 255, 255, 0.2)";
    ctx.fillRect(10, 10, width, height); // Offset for glitch effect

    ctx.globalCompositeOperation = "source-over";
}

function applyBaseEffect(ctx: CanvasRenderingContext2D, width: number, height: number) {
    // Base Blue tint
    ctx.globalCompositeOperation = "hard-light";
    ctx.fillStyle = "rgba(0, 82, 255, 0.4)"; // Base Blue
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "source-over";

    // Add a simple border
    ctx.strokeStyle = "#0052FF";
    ctx.lineWidth = Math.max(20, width * 0.05);
    ctx.strokeRect(0, 0, width, height);
}
