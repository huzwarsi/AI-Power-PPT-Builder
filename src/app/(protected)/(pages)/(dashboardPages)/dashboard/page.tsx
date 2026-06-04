import { getAllProjects } from "@/actions/projects"
import NotFound from "@/components/global/not-found"
import ProjectCard from "@/components/global/project-card"
import Projects from "@/components/global/projects"

const DashboardPage = async () => {
    const allProjects = await getAllProjects()

    return (
        <div suppressHydrationWarning={true} className="w-full flex flex-col gap-6 relative md:p-0 p-4">
            <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
                <div className=" ml-5 flex flex-col py-5 item-start">
                    <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
                        Projects
                    </h1>
                    <p className="text-base font-normal dark:text-muted-foreground">
                        All of your work in one place
                    </p>
                </div>
            </div>
            {/* Projectsss */}
            <ProjectCard />
            {allProjects.data && allProjects.data.length > 0 ? <Projects projects={allProjects.data} /> :

                <NotFound />
            }

        </div>
    )
}

export default DashboardPage
