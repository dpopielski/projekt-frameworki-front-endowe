import { FC } from "react";

const ProfileInfoData = [
    {
        title: 'Message',
        icone: './assets/icons/comments.svg',
        path: '/',
    },
    {
        title: 'Create a request',
        icone: './assets/icons/comments.svg',
        path: '/',
    },
    {
        title: 'Add to a cluster',
        icone: './assets/icons/comments.svg',
        path: '/',
    },
];

export const ProfileInfo: FC = () => {
    return (
        <section className="bg-white px-4 py-5">
            <nav className="flex justify-end gap-4">
                {ProfileInfoData.map((item, index) => (
                    <div className="" key={index}>
                        <a className="flex gap-2" href={item.path}>
                            <img src={item.icone} alt="" />
                            <span>{item.title}</span>
                        </a>
                    </div>
                ))}
                <span>X</span>
            </nav>
            
            <article className="flex ">
                    <div className="flex gap-4">
                        <div className="fex flex-col justify-center items-center">
                            <img className="w-12 h-12" src="./assets/profile.svg" alt="" />
                            <a href="/">See Profile</a>
                        </div>
                        <div>
                            <p>Humberta swift</p>
                            <span>New-york <br /> Partner</span>
                        </div>
                    </div>
            </article>
        </section>
    )
}
export default ProfileInfo;
