import { useDispatch, useSelector } from "react-redux";
import Toast from "../../../../../components/ui/Toast";
import { useDeleteProductMutation } from "../../api/adminProductApi";
import { cancelDeleteProduct } from "../../redux/adminSlice";
import Modal from "./Modal";

export default function ModalDelete({ closeModal }) {
   const productToDelete = useSelector((state) => state.admin.deleteProduct); // get the product to delete from redux store
   const [deleteProduct,] = useDeleteProductMutation()

   const dispath = useDispatch();

   //cancel product deletion
   const handleCancelDeleteProducts = () => {
      dispath(cancelDeleteProduct()); // cancel product deletion action
      closeModal();
   }

   // delete the product
   const handleDeleteProduct = () => {
      deleteProduct(productToDelete._id);

      Toast('success', 'Product deleted successfully')
      closeModal()
   }
   return (
      <>
         <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
         <div className="flex justify-center items-center space-x-4">
            <button onClick={handleCancelDeleteProducts} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
               No, cancel
            </button>
            <button onClick={handleDeleteProduct} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
               Yes, I'm sure
            </button>
         </div>
      </>
   )
}
