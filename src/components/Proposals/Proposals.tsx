import { FC } from "react";

export const Proposals: FC = () => {
    return (
        <div className="flex flex-col gap-4 bg-white p-5">
            <h3>Proposals</h3>
            <table className="w-full">
                <tr className="border-solid border-b-2">
                    <th className="text-left">Name</th>
                    <th className="text-left">Entity</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">Expertise</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Firm</th>
                </tr>
                <tr className="">
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/02/2018</td>
                    <td>Racine</td>
                </tr>
                <tr className="">
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/02/2018</td>
                    <td>Racine</td>
                </tr>
                <tr className="">
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/02/2018</td>
                    <td>Racine</td>
                </tr>
            </table>
        </div>    
    );
}

export default Proposals;