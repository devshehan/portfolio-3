import Link from "next/link"

export default function HeaderSection() {
    return (
      <div className="py-4 text-center">
        <ol className="flex items-center justify-center space-x-16">
          <Link href={`/`}>
            <li className="text-2xl font-bold hover:text-cyan-500 transition-colors duration-300">[h] - home</li>
          </Link>
          <Link href={`/blogs`}>
            <li className="text-2xl font-bold hover:text-cyan-500 transition-colors duration-300">[b] - blogs</li>
          </Link>
          <li className="text-2xl font-bold hover:text-cyan-500 transition-colors duration-300">[p] - projects</li>
        </ol>
      </div>
    )
}