import { Link, Locate } from "lucide-react";
import JobSection from "./components/WorkComponent";
import BlogSection from "./components/BlogComponent";
import HeaderSection from "./components/Header";
import ProjectSection from "./components/Project";
import Footer from "./components/Footer";

const projects = [
  {
    name : "royal cinema",
    creator: "creator",
    description: "cinema online ticket booking platform"
  },
  {
    name: "crypto trading platform",
    creator: "creator",
    description: "advance order matching mechanism built using c++"
  },
  {
    name: "bikable",
    creator: "creator",
    description: "built mvc architecture from php"
  }
];

const jobs = [
  {
    company: "ifs",
    position: "incoming software engineer",
    duration: "jan 2025 - future",
    link: "https://www.ifs.com/"
  },
  {
    company: "isa (group of air arabia)",
    position: "associate software engineer",
    duration: "july 2024 - present",
    link: "https://isa.ae/"

  },
  {
    company: "directfn",
    position: "intern software engineer",
    duration: "nov 2023 - may 2024",
    link: "https://www.directfn.com/en/"

  },
];

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">

        <HeaderSection/>

        <div className="py-4">
          <div className="text-4xl text-white font-bold">shehan avishka</div>
          <div className="py-3">
            <div className="flex gap-4">
              <Locate className="text-white"/>
              <p className="text-xl">mulketiyatota, galle, sri lanka</p>
            </div>
            <div className="py-4 text-xl">
              i am 24 years old software engineer who loves building scalable systems and solve problems on this planet
              as the human.
            </div>
          </div>
        </div>

        <JobSection jobs={jobs} />

        <div className="py-4">
          <p className="text-3xl text-white font-bold py-2">
            <span className="text-cyan-500">*</span> education
          </p>
          <p className="text-xl">
            i am computer science graduate from university of colombo school of computing.
            i completed my advance level in physical science stream in 2019 at richmond college galle.
            from grade 1 to 11, i attended to karandeniya central college galle.
          </p>
        </div>

        <BlogSection/>

        <ProjectSection projects={projects}/>

        <Footer/>

      </div>

    </div>
  );
}
