import { Storage } from '@google-cloud/storage';

const storage = new Storage();
const bucketName = 'portfolio-419922.appspot.com';
const fileName = 'data/projects.json';
const bucket = storage.bucket(bucketName);
const file = bucket.file(fileName);

async function getProjects() {
  const [contents] = await file.download();
  return JSON.parse(contents.toString('utf8'));
}

async function saveProjects(projects) {
  await file.save(JSON.stringify(projects), {
    contentType: 'application/json',
    resumable: false,
  });
}

export default async function storageAdmin(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const projects = await getProjects();
        res.status(200).json(projects);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve projects', details: error.message });
      }
      break;
    case 'POST':
      try {
        const projects = await getProjects();
        const newProject = { ...req.body, id: projects.length + 1 }; // Ensure unique ID assignment
        projects.push(newProject);
        await saveProjects(projects);
        res.status(201).json(newProject);
      } catch (error) {
        res.status(500).json({ error: 'Failed to add project', details: error.message });
      }
      break;
    case 'PUT':
      try {
        const projects = await getProjects();
        const index = projects.findIndex(p => p.id === Number(req.body.id));
        if (index !== -1) {
          projects[index] = { ...projects[index], ...req.body };
          await saveProjects(projects);
          res.status(200).json(projects[index]);
        } else {
          res.status(404).json({ error: 'Project not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to update project', details: error.message });
      }
      break;
    case 'DELETE':
      try {
        const projects = await getProjects();
        const newProjects = projects.filter(p => p.id !== Number(req.body.id));
        await saveProjects(newProjects);
        res.status(204).end(); // No content to send back
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete project', details: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
