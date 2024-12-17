import { Twitter, Github, Linkedin } from 'lucide-react';
import { ModeToggle } from './ToggleTheme';

export default function Navbar() {
  return (
    <nav className="max-[640px]:mt-16 flex justify-between items-center gap-8 w-full px-8">
      <div className='flex items-center justify-center gap-8'>
        <a href="https://github.com/gonzalosimon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Github className="w-7 h-7" />
        </a>

        <a href="https://www.linkedin.com/in/gonzalo-simon-aguilar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Linkedin className="w-7 h-7" />
        </a>
      </div>

      <ModeToggle />
    </nav >
  );
}
