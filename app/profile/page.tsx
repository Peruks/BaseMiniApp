import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";

export default function ProfilePage() {
    return (
        <Layout>
            <div className="pt-6">
                <div className="px-6 mb-6">
                    <h1 className="text-2xl font-bold text-white">My Gallery</h1>
                    <p className="text-gray-400 text-sm">Your saved masterpieces</p>
                </div>
                <Gallery />
            </div>
        </Layout>
    );
}
