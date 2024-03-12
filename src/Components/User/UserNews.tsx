import { BsThreeDots } from "react-icons/bs";

function UserNews() {
  return (
    <div>
        <div className="grid grid-cols-2 mt-3 cursor-pointer hover:bg-blue_third transition  p-2 px-4">
        <div className="">
          <h3 className="text-base font-semibold text-gray-800">Business and finance</h3>
          <p className="text-xs text-gray-600 w-[17rem] font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="justify-self-end">
          <BsThreeDots />
        </div>
      </div>
    </div>
  )
}

export default UserNews