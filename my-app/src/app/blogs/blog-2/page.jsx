
import { db, posts } from "@/app/lib/db";

export default async function BlogPage2() {

    const allPosts = await db.select().from(posts)
    return <div>Blog Page 2

        <ul>
            {
                allPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
}