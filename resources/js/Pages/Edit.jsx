import { Head, useForm } from "@inertiajs/react";

export default function Edit({ post }) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body || "",
    });

    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        <>
            <Head title="Edit" />

            <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center px-4 py-10">
                <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        📝 Edit Postingan
                    </h1>

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="body"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Ubah Isi Postingan
                            </label>
                            <textarea
                                id="body"
                                rows="8"
                                value={data.body}
                                onChange={(e) => setData("body", e.target.value)}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition ${
                                    errors.body ? "border-red-500 ring-red-300" : "border-gray-300"
                                }`}
                                placeholder="Tulis ulang isi postingan kamu..."
                            ></textarea>
                            {errors.body && (
                                <p className="text-red-500 text-sm mt-1">{errors.body}</p>
                            )}
                        </div>

                        <div className="flex justify-between">
                            <a
                                href="/"
                                className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                            >
                                ← Kembali
                            </a>

                            <button
                                type="submit"
                                disabled={processing || data.body.trim() === ""}
                                className={`px-5 py-2.5 rounded-md font-medium transition duration-200 ${
                                    processing || data.body.trim() === ""
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-rose-500 text-white hover:bg-rose-600"
                                }`}
                            >
                                {processing ? "Menyimpan..." : "Update Post"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
