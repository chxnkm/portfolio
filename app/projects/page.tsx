import fs from 'fs';
import path from 'path';
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card';

type Project = {
  date: Date;
  name: string;
  description: string;
  image: string;
  href: string;
};

const fetchProjects = async (): Promise<Project[]> => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projectsData = JSON.parse(jsonData).projects;

  // Parse date strings into Date objects
  const projects = projectsData.map((project: any) => ({
    ...project,
    date: new Date(project.date),
  })) as Project[];

  // Sort projects in descending order based on date
  projects.sort((a, b) => b.date.getTime() - a.date.getTime());

  return projects;
};



const Projects = async () => {
  const projects = await fetchProjects();

  return (
    <main>
      <div className="text container mx-auto">
        <div className="col-span-2 lg:col-start-2 text-right mt-32 gap-8">
          <h1 className="font-black font-belsey">My Projects 👨🏻‍💻</h1>
          <p className="text-xl mt-12">Click on each card to learn more!</p>
        </div>
        <div className='mt-12'>
          {projects.map((project, index) => (
            <Card key={index} className="bg-background border-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden animate-slideUp">
              <CardHeader>
                <CardTitle><a href={project.href} className="font-belsey text-3xl hover:underline">{project.name}</a></CardTitle>
                <CardDescription>{project.date.toDateString().split(' ').slice(1).join(' ')}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between mt-[-5%]">
                <p className="flex-grow max-w-[75%]">{project.description}</p>
                <div style={{ width: '150px', height: '150px', backgroundImage: `url(${project.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;