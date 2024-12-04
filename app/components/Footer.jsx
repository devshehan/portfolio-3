export default function Footer() {
    return (
        <div className="py-4">
            <p className="text-3xl text-white font-bold py-2">
                <span className="text-cyan-500">*</span> links
            </p>
            <ul className="flex space-x-10 pt-2">
                <li>
                    <a 
                        className="text-xl hover:text-cyan-500 transition-colors duration-300 cursor-pointer"
                        href="mailto:shehaan.avishka00@gmail.com" 
                    >
                        email
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/shehaanavishka"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xl hover:text-cyan-500 transition-colors duration-300 cursor-pointer"
                    >
                        linkedin
                    </a>
                </li>
                <li>
                    <a
                        className="text-xl hover:text-cyan-500 transition-colors duration-300 cursor-pointer"
                        href="https://github.com/devshehan"
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        github
                    </a>
                </li>
                <li>
                    <a
                        className="text-xl hover:text-cyan-500 transition-colors duration-300 cursor-pointer"
                        href="https://x.com/ShehanAvishka14"
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        x
                    </a>
                </li>
            </ul>
      </div>
    )
}