'use client';

export default function JobSection({ jobs }) {
    return (
      <div className="py-4">
        <p className="text-3xl text-white font-bold py-2"><span className="text-cyan-500">*</span> work</p>
        {jobs.map((job, index) => (
          <div className="py-4" key={index} onClick={() => window.open(job.link, '_blank')}>
            <p className="text-2xl text-white font-bold hover:text-cyan-500 transition-colors duration-300 cursor-pointer">
              {job.company}
            </p>
            <p className="text-xl">{job.position} ({job.duration})</p>
          </div>
        ))}
      </div>
    );
  }
  