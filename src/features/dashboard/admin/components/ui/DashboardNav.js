import Searchbar from "../../../../../components/ui/Searchbar";

export default function DashboardNav() {
  return (
    <div className='absolute top-0 left-0 dark:bg-gray-800 w-full p-4'>
      <div className="w-1/3 pl-4"><Searchbar /></div>
    </div>
  )
}
