interface IWorkCard {
  company: string;
  period: string;
  position: string;
  description: string;
  projects?: IWorkProject[];
}
interface IWorkProject {
  name: string;
  period: string;
  skills: string[];
  description: string;
  images?: string[];
}
