import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Clients from '@/components/Clients';
import { clientsList } from '@/lib/lists';

export default function Home() {
  return (
    <div className='flex flex-col px-12 h-screen gap-12 justify-center items-center'>
      <Main />
      {/* or last projects */}
      {/* <section className="w-3/5">
        <Clients clients={clientsList} />
      </section> */}
    </div>
  );
}
