import { StudentData } from '@/app/lib/data';

type Props = {
  data?: StudentData,
  error?: unknown
}


const Table = ({ data, error }: Props) => {

  if (error || !data) {
    return <></>
  }

  let rollNo = data['Roll Number']?.toString().padStart(8, '0');
  let date = data['Date']?.toLocaleString().split('T')[0];
  let day = data['Day'];
  let time = data['Time'];



  return (
    <>
      <div className='w-[90%] sm:w-full mx-auto overflow-auto flex justify-center'>
        <table className="shadow-lg text-xl mt-5 mx-auto" cellPadding={8}>
          <thead>
            <tr className="bg-gray-300">
              <th className="px-5 lg:px-6">Roll No</th>
              <th className="px-5 lg:px-6">Date</th>
              <th className="px-5 lg:px-6">Day</th>
              <th className="px-5 lg:px-6">Time</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              <tr>
                <td className="px-5 lg:px-6 text-base md:text-base">{rollNo}</td>
                <td className="px-5 lg:px-6 text-base md:text-base">{date}</td>
                <td className="px-5 lg:px-6 text-base md:text-base">{day}</td>
                <td className="px-5 lg:px-6 text-base md:text-base">{time}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </>);
}

export default Table;
