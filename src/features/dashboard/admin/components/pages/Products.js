import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useGetAllProductsQuery } from "../../api/adminProductApi"
import EditProductModal from "../ui/EditProductModal";
import Modal from "../ui/Modal";
import DeleteModal from "../ui/DeleteModal";
import ProductTableItem from "../ui/ProductTableItem";

export default function Products() {
   const [showModal, setShowModal] = useState("")
   const { data, } = useGetAllProductsQuery();
   const openModal = (type) => {
      setShowModal(type);
   }
   const closeModal = () => {
      setShowModal('');
   }

   console.log(data);
   return (<>
      <ToastContainer />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         {/* {showModal && <DeleteModal closeModal={closeModal} />} */}
         {showModal && <Modal modalContent={(showModal === 'delete' && <DeleteModal closeModal={closeModal} />) || (showModal === 'edit' && <EditProductModal closeModal={closeModal} />)} />}
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  <th scope="col" className="p-4">
                     <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                     </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Accesories
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Available
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
               {data && data?.products.map((item, index) => {
                  return <ProductTableItem key={index} product={item} openModal={openModal} />
               })}
            </tbody>
         </table>
      </div>
   </>
   )
}
