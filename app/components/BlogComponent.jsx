import Link from "next/link";
import { blogsOverview } from "../data/blogs";

export default function BlogSection() {
    return (
      <div className="py-4">
        <p className="text-3xl text-white font-bold p-2 pb-4 "><span className="text-cyan-500">*</span> blogs</p>
        {blogsOverview.map((blog, index) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div className="flex justify-between mb-4 hover:text-cyan-500 transition-colors duration-300" key={index}>
              <div className="text-xl underline">{blog.title}</div>
              <div>{blog.date}</div>
            </div>     
          </Link>
        ))}
      </div>
    );
  }
  