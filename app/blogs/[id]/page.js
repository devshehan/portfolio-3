import HeaderSection from "@/app/components/Header";

const blogs = [
    {
      id: 1,
      title: "c# fundamentals",
      date: "dec 2, 2024",
      content: "Full content of the C# fundamentals blog post. This is where you would write the detailed blog content."
    },
    {
      id: 2,
      title: "setting up sprint boot 3 application as a gRPC client and server",
      date: "aug 21, 2024",
      content: "Detailed content about Spring Boot gRPC setup. Here you would provide in-depth explanation and code samples."
    },
    {
      id: 3,
      title: "spring cloud config - dynamic file and class loading mechanism",
      date: "jan 22, 2024",
      content: "Exploring the intricacies of Spring Cloud Config and its dynamic loading capabilities."
    },
    {
      id: 4,
      title: "JVM architecture",
      date: "jan 7, 2024",
      content: "Deep dive into the Java Virtual Machine architecture and its internal workings."
    },
    {
      id: 5,
      title: "a thrilling diving into prometheus and grafana.",
      date: "dec 3, 2023",
      content: "Comprehensive guide to monitoring and visualization using Prometheus and Grafana."
    },
    {
      id: 6,
      title: "s.o.l.i.d",
      date: "sep 22, 2023",
      content: "Explaining the SOLID principles of object-oriented design in depth."
    }
];

export async function generateStaticParams() {
    return blogs.map((blog) => ({
      id: String(blog.id)
    }));
}

export default function BlogPost({ params }) {
    const blog = blogs.find((b) => b.id == params.id);
  
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

        </div>
      </div>
    );
}



