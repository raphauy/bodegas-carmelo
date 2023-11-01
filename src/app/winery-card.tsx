import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Winery } from './page';

interface Props {
    winery: Winery
}

export default function WineryCard({ winery: { name, description, image, url } }: Props) {

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden min-w-[100px] max-w-[200px] p-4">
        <Link href={url} target='_blank' rel='noopener' className="flex flex-col h-full">
            <div className="relative h-40">
                <Image src={`${image}`} width={160} height={160} alt={name} className='rounded-xl border'/>
            </div>
            <div className="pt-1">
                <h2 className="text-base text-center font-semibold text-muted-foreground">{name}</h2>
            </div>
            <div className='flex-1 flex items-end justify-end invisible group-hover:visible'>
                <div className='bg-gray-700 text-white w-9 h-9 rounded-full flex items-center justify-center'>
                    <ExternalLink size={20}/>
                </div>                
            </div>
        </Link>
    </div>
  );
};
