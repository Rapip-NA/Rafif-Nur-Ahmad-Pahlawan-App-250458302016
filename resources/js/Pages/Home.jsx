import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home({ posts }) {
    const route = useRoute();
    const { flash, component } = usePage().props;
    const [flashMessage, setFlashMessage] = useState(flash.message);

    useEffect(() => {
        if (flashMessage) {
            const timer = setTimeout(() => setFlashMessage(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    return (
        <>
            <Head title={component} />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-white py-16 text-center shadow-md">
                <h1 className="text-4xl font-extrabold tracking-wide mb-3">
                    Pahlawan Indonesia 🇮🇩
                </h1>
                <p className="text-lg opacity-90">
                    Mengenal jasa dan perjuangan para pahlawan bangsa.
                </p>
            </section>

            {/* Flash Message */}
            {flashMessage && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-6 right-6 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
                >
                    {flashMessage}
                </motion.div>
            )}

            {/* Posts Grid */}
            <main className="max-w-4xl mx-auto px-4 py-10 grid gap-6">
                {posts.data.length === 0 ? (
                    <p className="text-center text-gray-500 italic">
                        Belum ada postingan 😔
                    </p>
                ) : (
                    posts.data.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border border-gray-100"
                        >
                            <div className="text-xs text-gray-400 mb-2">
                                Diposting pada{" "}
                                {new Date(post.created_at).toLocaleString("id-ID", {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                })}
                            </div>
                            <p className="text-lg font-semibold text-gray-800 mb-3">
                                {post.body.length > 100
                                    ? post.body.substring(0, 100) + "..."
                                    : post.body}
                            </p>
                            <Link
                                href={route("posts.show", post)}
                                className="text-rose-600 font-medium hover:underline"
                            >
                                Baca selengkapnya →
                            </Link>
                        </motion.div>
                    ))
                )}
            </main>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 py-8">
                {posts.links.map((link, i) =>
                    link.url ? (
                        <Link
                            key={i}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                                link.active
                                    ? "bg-rose-500 text-white"
                                    : "text-rose-500 hover:bg-rose-100"
                            }`}
                        />
                    ) : (
                        <span
                            key={i}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="px-3 py-1 text-gray-400 text-sm"
                        />
                    )
                )}
            </div>
        </>
    );
}
