export default function ProjectSection({ projects }) {
    return (
        <div className="py-4">
            <p className="text-3xl text-white font-bold py-2"><span className="text-cyan-500">*</span> projects</p>
            {projects.map((project, index) => (
                <div className="py-4" key={index}>
                    <p className="text-2xl text-white font-bold">{project.name}</p>
                    <p>{project.creator}</p>
                    <p className="text-xl pt-2">{project.description}</p>
                </div>
            ))}
        </div>
    );
}
