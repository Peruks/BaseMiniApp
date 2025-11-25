import Layout from "@/components/Layout";
import ImageEditor from "@/components/ImageEditor";

export default function ConvertPage() {
    return (
        <Layout>
            <div className="pt-6">
                <div className="px-6 mb-6">
                    <h1 className="text-2xl font-bold text-white">Create</h1>
                    <p className="text-gray-400 text-sm">Upload and style your image</p>
                </div>
                <ImageEditor />
            </div>
        </Layout>
    );
}
