
export default async function BlogPage() {

    const res = await fetch("https://api.vercel.app/blog")
    const post = await res.json()

    return (
        <div className="max-w-6xl mx-auto p-5">
            <h1 className="text-3xl font-bold text-center mb-8">Blog Page</h1>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.map((post) => (
                    <li
                        key={post.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6 flex flex-col"
                    >
                        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{post.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto font-medium">
                            By {post.author}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}