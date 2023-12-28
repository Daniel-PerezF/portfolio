import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MyProjects } from "../components/MyProjects";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#364652]">
      <Header />
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h3 className="text-5xl">Projects</h3>
        <div className="w-full flex justify-center py-4">
          <p className="px-2 w-full lg:w-2/3 lg:px-12 text-center lg:text-xl">
            I developed my software skills at LearningFuze, a leading coding
            bootcamp in Irvine, California. Delving into an intensive curriculum
            and gaining hands-on experience in web development, mastering key
            technologies like HTML, CSS, JavaScript, and more as listed below.
          </p>
        </div>
      </div>
      <MyProjects />
      <Footer />
    </div>
  );
}
