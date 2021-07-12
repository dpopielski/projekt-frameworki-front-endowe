import { FC } from 'react';
import { DocumentIcon, ChatIcon, UserIcon } from '@heroicons/react/outline';


export const PanelInfo: FC  = () => {
    return (
        <div className="flex flex-col gap-4 bg-white p-5">
            <h3 className="">Panel informations</h3>
            <div className="flex flex-col gap-1">
                <p className="font-extralight">Hourly fee</p>
                <span>610$/hour (Negociated)</span>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-extralight">Terms & Conditions</p>
                <span>Monthly 10k$ retainer - see with Jeanny Smith</span>
                <div className="flex items-center gap-2 rounded p-2 bg-gray-100"><DocumentIcon className="h-5 w-5" /><span>Attachment_lorem-ipsum25425.jpg</span></div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="">Services & projects</p>
                <span className="font-extralight">Corporate M&A and international acquisitions</span>
            </div>
            <div className="flex flex-col gap-2">
                <p className="">Internal correspondants</p>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-12 rounded p-2 bg-gray-100">
                        <div className="flex items-center gap-2">
                            <img className="h-5 w-5" src="./assets/profile.png" alt="" />
                            <span>Firstname Lastname</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <ChatIcon  className="h-5 w-5"/>
                            <span className="font-light">Message</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <UserIcon  className="h-5 w-5"/>
                            <span className="font-light">Profile</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-12 rounded p-2 bg-gray-100">
                        <div className="flex items-center gap-2">
                            <img className="h-5 w-5" src="./assets/profile.png" alt="" />
                            <span>Firstname Lastname</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <ChatIcon  className="h-5 w-5"/>
                            <span className="font-light">Message</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <UserIcon  className="h-5 w-5"/>
                            <span className="font-light">Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PanelInfo;
