import { Link } from "react-router-dom";
export const InternalReviews = () => {
    return (
        <div className="flex flex-col gap-4 bg-white p-5">
            <h3>Internal Reviews</h3>
            <table className="w-full">
                <tr className="border-solid border-b-2">
                    <th className="text-left">Name</th>
                    <th className="text-left">Entity</th>
                    <th className="text-left">Location</th>
                    <th className="text-left">Expertise</th>
                    <th className="text-left">Date</th>
                </tr>
                <tr className="">
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/02/2018</td>
                </tr>
                <tr className="">
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/02/2018</td>
                </tr>
                <tr className="">
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>France</td>
                    <td>#Tax</td>
                    <td>20/02/2018</td>
                </tr>
            </table>
            <Link to="/404">
                <h3>See more Reviews</h3>
            </Link>
        </div>
    )
}
export default InternalReviews;