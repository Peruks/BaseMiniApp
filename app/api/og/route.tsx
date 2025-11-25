import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                    backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "4px solid #0ea5a1",
                        borderRadius: "20px",
                        padding: "40px 80px",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        boxShadow: "0 0 50px rgba(14,165,161,0.3)",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "80px",
                            fontWeight: "bold",
                            background: "linear-gradient(to right, #0ea5a1, #ff4d6d)",
                            backgroundClip: "text",
                            color: "transparent",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        BaseStyle Lab
                    </h1>
                    <p
                        style={{
                            fontSize: "30px",
                            color: "#aaaaaa",
                            marginTop: "20px",
                        }}
                    >
                        Neon Punk Image Converter
                    </p>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
