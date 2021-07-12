export const AmountOfFees = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-5">
      <h3>Amount of fees</h3>
      <table className="w-full">
        <tr className="">
          <th className="text-left">Year</th>
          <th className="text-left">Cost center</th>
          <th className="text-left">Total amount</th>
          <th className="text-left">Law firm</th>
        </tr>
        <tr className="">
          <td>Operation</td>
          <td>Renault</td>
          <td>France</td>
          <td>#Tax</td>
        </tr>
        <tr className="">
          <td>Operation</td>
          <td>Renault</td>
          <td>France</td>
          <td>#Tax</td>
        </tr>
        <tr className="">
          <td>Operation</td>
          <td>Renault</td>
          <td>France</td>
          <td>#Tax</td>
        </tr>
      </table>
    </div>
  );
};
export default AmountOfFees;
