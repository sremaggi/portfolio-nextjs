import { DiJavascript1, DiReact, DiDocker, DiGo, DiGit, DiJava, DiPython, DiAngularSimple } from 'react-icons/di';
import { FaAws, FaGoogle } from 'react-icons/fa';

const technologies = [
  { id: 'golang', icon: <DiGo />, name: 'Golang' },
  { id: 'js', icon: <DiJavascript1 />, name: 'JavaScript' },
  { id: 'python', icon: <DiPython />, name: 'Python' },
  {id:'java',icon:<DiJava />,name:'Java'},
  { id: 'react', icon: <DiReact />, name: 'React' },
  { id: 'angular', icon: <DiAngularSimple />, name: 'Angular' },
  { id: 'gcp', icon: <FaGoogle />, name: 'GCP' },
  { id: 'aws', icon: <FaAws />, name: 'AWS' },
  { id: 'docker', icon: <DiDocker />, name: 'Docker' },
  { id: 'git', icon: <DiGit />, name: 'Git' },

];

export default technologies;