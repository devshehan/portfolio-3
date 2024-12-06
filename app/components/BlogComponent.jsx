import Link from "next/link";

export default function BlogSection({ blogs }) {
    return (
      <div className="py-4">
        <p className="text-3xl text-white font-bold p-2 pb-4"><span className="text-cyan-500">*</span> blogs</p>
        {blogs.map((blog, index) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div className="flex justify-between pb-4" key={index}>
              <div className="text-xl underline">{blog.title}</div>
              <div>{blog.date}</div>
            </div>     
          </Link>
        ))}
      </div>
    );
  }
  