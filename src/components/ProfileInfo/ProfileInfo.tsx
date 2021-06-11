import { FC } from "react";
import { PencilIcon, ChatIcon, DocumentTextIcon, BriefcaseIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';

const ProfileInfoData = [
    {
        title: 'Message',
        icone: <ChatIcon className="h-5 w-5"/>,
        path: '/',
    },
    {
        title: 'Create a request',
        icone: <DocumentTextIcon className="h-5 w-5"/>,
        path: '/',
    },
    {
        title: 'Add to a cluster',
        icone: <BriefcaseIcon className="h-5 w-5"/>,
        path: '/',
    },
];

export const ProfileInfo: FC = () => {
    return (
        <section className="rounded-t bg-white p-5">
            <nav className="flex justify-end gap-4 mb-5">
                {ProfileInfoData.map((item, index) => (
                    <div className="" key={index}>
                        <a className="flex gap-2" href={item.path}>
                            <span>{item.icone}</span>
                            <span>{item.title}</span>
                        </a>
                    </div>
                ))}
                <a className="flex justify-center items-center" href="/">
                    <XIcon className="h-5 w-5" />
                </a>
            </nav>
            
            <article className="flex w-full">
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col justify-center items-center">
                            <img className="mx-auto w-16 h-16 mb-2" src="./assets/profile.svg" alt="" />
                            <a className="w-20  " href="/">See Profile</a>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <div>
                                    <p>Humberta swift</p>
                                    <p>Clifford Chance</p>
                                </div>
                                <a href="/"><PencilIcon className="h-5 w-5" /></a>
                            </div>
                            <div className="flex justify-between w-full">
                                <span className="font-light">New-york <br /> Partner</span>
                                <div>
                                    <span className="block">hubertaswift@gmail.com</span>
                                    <span className="block">+33 (0)6 12 34 56 78</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </article>
        </section>
    )
}
export default ProfileInfo;
