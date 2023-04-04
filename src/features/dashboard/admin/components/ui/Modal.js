import '../../asset/css/modal.css';
export default function Modal({ modalContent }) {
   return (
      <div id="Modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 left-0 z-50 p-4 flex justify-center items-center w-full h-full bg-slate-700/75 ease-in duration-1000 md:inset-0 md:h-full">
         <div className="modal-container rounded p-4 dark:bg-gray-800 mx-auto w-full max-w-md md:h-auto">
            <div className="modal-header">
               <h2 className='text-center dark:text-slate-50 font-bold text-2xl'>Modal Title</h2>
            </div>
            <div className="modal-body text-center">
               {modalContent}
            </div>
         </div>
      </div>
   )
}
