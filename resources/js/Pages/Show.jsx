import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    const route = useRoute();

   function submit(e) {
    e.preventDefault();
    if (confirm("Yakin ingin menghapus postingan ini?")) {
        destroy(route("posts.destroy", post.id));
    }
}



    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-rose-100 to-white flex items-center justify-center px-4 py-10">
                <div className="bg-white shadow-xl rounded-2xl p-6 max-w-2xl w-full border border-gray-100">
                    {/* Header */}
                    <div className="border-b pb-3 mb-4">
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">
                            Detail Postingan
                        </h1>
                        <p className="text-sm text-gray-500">
                            Diposting pada{" "}
                            {new Date(post.created_at).toLocaleString("id-ID", {
                                dateStyle: "long",
                                timeStyle: "short",
                            })}
                        </p>
                    </div>

                    {/* Body */}
                    <div className="text-gray-700 leading-relaxed mb-6">
                        {post.body}
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex items-center justify-end gap-3 border-t pt-4">
                        <Link
                            href="/"
                            className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-300 transition"
                        >
                            ← Kembali
                        </Link>
                        
                        <Link
                            href={`/posts/${post.id}/edit`}
                            className="bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition"
                        >
                            Update
                        </Link>

                        <form onSubmit={submit}>
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
