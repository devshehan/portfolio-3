import javaArchitecture from "./javaArchitectureBlog";
import settingUpGrpcOnSpring from "./settingUpGrpcOnSpring";

export const blogs = [
    javaArchitecture,
    settingUpGrpcOnSpring   
]

export const blogsOverview = blogs.map(blog => ({
    id: blog.id,
    title: blog.title,
    date: blog.date
}));

