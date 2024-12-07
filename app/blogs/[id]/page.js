import HeaderSection from "@/app/components/Header";
import { blogs } from "@/app/data/blogs";

export async function generateStaticParams() {
    return blogs.map((blog) => ({
      id: String(blog.id)
    }));
}

export default async function BlogPost({ params }) {
    const { id } = await params
    const blog = blogs.find((b) => b.id == id);
  
    if (!blog) {
      return (
        <div className="text-white p-8">
          <h1 className="text-3xl">Blog Post Not Found</h1>
          <p>The blog post you are looking for does not exist.</p>
        </div>
      );
    }
  
    return (
      <div className="flex justify-center items-center">
        <div className="w-1/2">
            <HeaderSection/>

            <div className="text-3xl text-white"><span className="text-cyan-500">*</span> blog</div>

            <div>
                <div className="py-2 mt-2 text-4xl">
                    {blog.title.toLowerCase()}
                </div>
                <div>{blog.date}</div>
            </div>

            <div className="mt-6"></div>

            <div className="text-2xl text-gray-50 opacity-50">
              <p>{blog.content}</p>
            </div>

        </div>
      </div>
    );
}



