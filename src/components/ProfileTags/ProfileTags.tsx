import { FC } from 'react'
import { PencilIcon } from '@heroicons/react/outline';

export const ProfileAttributes:FC = () => {
    return (
        <section className="flex flex-col gap-3 relative rounded bg-white p-5">
            <a className="absolute right-5 top-5" href="/">
                <PencilIcon className="h-5 w-5"/>
            </a>
            <div>
                <p className="
                block mb-2">Expertise</p>
                <div className="flex flex-start flex-wrap gap-2">
                    <span className='rounded bg-blue-100 px-2'>Mergers and acquistion</span>
                </div>       
            </div>
            <div>
                <p className="
                block mb-2">Specialties</p>
                <div className="flex flex-start flex-wrap gap-2">
                    <span className='rounded bg-blue-100 px-2'>Cross border operation</span>
                    <span className='rounded bg-blue-100 px-2'>Transaction over 500M€/$</span>
                </div>       
            </div>
            <div>
                <p className="
                block mb-2">Admission to practice law</p>
                <div className="flex flex-start flex-wrap gap-2">
                    <span className='rounded bg-blue-100 px-2'>Paris bar association</span>
                    <span className='rounded bg-blue-100 px-2'>Tunisian bar association</span>
                </div>       
            </div>
            <div>
                <p className="
                block mb-2">Counties</p>
                <div className="flex flex-start flex-wrap gap-2">
                    <span className='rounded bg-blue-100 px-2'>Tunisia</span>
                </div>       
            </div>
        </section>
    )
}
export default ProfileAttributes;