import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelEditProduct } from '../../redux/adminProductSlice'

export default function EditProductModal({ closeModal }) {
   const { title, description, regular_price, selling_price, } = useSelector((state) => state.adminProduct.editProduct) || {}
   const [pTitle, setPtitle] = useState(title);
   const [pDescription, setPdescription] = useState(description);
   const [pRegularPrice, setPregularPrice] = useState(regular_price);
   const [pSellingPrice, setPsellingPrice] = useState(selling_price || regular_price);
   const [pQuantity, setPquantity] = useState(1);

   const dispatch = useDispatch();

   //cancel edit product
   const discardChanges = () => {
      dispatch(cancelEditProduct())
      closeModal()
   }
   return (
      <div className="mt-8 text-left">
         <form>
            <div className="mb-4">
               <label for="name" className="block text-slate-50 font-bold mb-2">Product Title</label>
               <input onChange={(e) => { setPtitle(e.target.value) }} type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={title} value={pTitle} />
            </div>

            <div className="mb-4 flex justify-between gap-2">
               <div>
                  <label for="regular-price" className="block text-slate-50 font-bold mb-2">Regular Price:</label>
                  <input onChange={(e) => { setPregularPrice(e.target.value) }} type="text" id="regular-price" name="regular-price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={regular_price} value={pRegularPrice} />
               </div>
               <div>
                  <label for="selling-price" className="block text-slate-50 font-bold mb-2">Selling Price:</label>
                  <input onChange={(e) => { setPsellingPrice(e.target.value) }} type="text" id="selling-price" name="selling-price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={selling_price || regular_price} value={pSellingPrice} />
               </div>
            </div>

            <div className="mb-4">
               <label for="quantity" className="block text-slate-50 font-bold mb-2">Quantity:</label>
               <input onChange={(e) => { setPquantity(e.target.value) }} type="number" id="quantity" name="quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={'1'} value={pQuantity} />
            </div>

            <div className="mb-4">
               <label for="description" className="block text-slate-50 font-bold mb-2">Description</label>
               <textarea onChange={(e) => { setPdescription(e.target.value) }} id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" rows="5" placeholder={description} value={pDescription}>Description</textarea>
            </div>
         </form>
         <div className="flex items-center justify-between">
            <button onClick={discardChanges} type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Discard Changes</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
         </div>
      </div>
   )
}
