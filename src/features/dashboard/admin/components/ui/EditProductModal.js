import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelEditProduct } from '../../redux/adminProductSlice'
import { useUpdateProductMutation } from '../../api/adminProductApi';

export default function EditProductModal({ closeModal }) {
   const { _id, title, description, regular_price, selling_price, } = useSelector((state) => state.adminProduct.editProduct) || {}
   const [updateProduct, { data }] = useUpdateProductMutation()
   const [pTitle, setPtitle] = useState(title);
   const [pDescription, setPdescription] = useState(description);
   const [pRegularPrice, setPregularPrice] = useState(regular_price);
   const [pSellingPrice, setPsellingPrice] = useState(selling_price || regular_price);
   const [pQuantity, setPquantity] = useState(1);
   const [submitDisabled, setSubmitDisabled] = useState(true);

   const dispatch = useDispatch();

   //cancel edit product
   const discardChanges = () => {
      dispatch(cancelEditProduct())
      closeModal()
   }
   //update product
   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
         title: e.target.title.value,
         description: e.target.description.value,
         regular_price: e.target.regular_price.value,
         selling_price: e.target.selling_price.value,
         // quantity: e.target.quantity,
      }
      console.log(formData);
      updateProduct({ id: _id, data: formData });
      //console.log(data);
      //data.type === 'success' && 
      closeModal()
   }

   return (
      <div className="mt-8 text-left">
         <form id='product-form' onSubmit={handleSubmit} >
            <div className="mb-4">
               <label htmlFor="name" className="block text-slate-50 font-bold mb-2">Product Title</label>
               <input onChange={(e) => {
                  setPtitle(e.target.value)
                  e.target.value !== e.target.placeholder ? setSubmitDisabled(false) : setSubmitDisabled(true)
               }} type="text" id="name" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={title} value={pTitle} />
            </div>

            <div className="mb-4 flex justify-between gap-2">
               <div>
                  <label htmlFor="regular-price" className="block text-slate-50 font-bold mb-2">Regular Price:</label>
                  <input onChange={(e) => {
                     setPregularPrice(Number(e.target.value))
                     e.target.value !== e.target.placeholder ? setSubmitDisabled(false) : setSubmitDisabled(true)
                  }} type="text" id="regular-price" name="regular_price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={regular_price} value={pRegularPrice} />
               </div>
               <div>
                  <label htmlFor="selling-price" className="block text-slate-50 font-bold mb-2">Selling Price:</label>
                  <input onChange={(e) => {
                     setPsellingPrice(Number(e.target.value))
                     e.target.value !== e.target.placeholder ? setSubmitDisabled(false) : setSubmitDisabled(true)
                  }} type="text" id="selling_price" name="selling-price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={selling_price || regular_price} value={pSellingPrice} />
               </div>
            </div>

            {/* <div className="mb-4">
               <label htmlFor="quantity" className="block text-slate-50 font-bold mb-2">Quantity:</label>
               <input onChange={(e) => { setPquantity(e.target.value) }} type="number" id="quantity" name="quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder={'1'} value={pQuantity} />
            </div> */}

            <div className="mb-4">
               <label htmlFor="description" className="block text-slate-50 font-bold mb-2">Description</label>
               <textarea onChange={(e) => {
                  setPdescription(e.target.value)
                  e.target.value !== e.target.placeholder ? setSubmitDisabled(false) : setSubmitDisabled(true)
               }} id="description" name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700" rows="5" placeholder={description} value={pDescription}>Description</textarea>
            </div>
         </form>
         <div className="flex items-center justify-between">
            <button onClick={discardChanges} type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Discard Changes</button>
            <button type="submit" form='product-form' onSubmit={handleSubmit} disabled={submitDisabled} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed">Save Changes</button>
         </div>
      </div>
   )
}
