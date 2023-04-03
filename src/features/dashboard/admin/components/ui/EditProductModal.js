import React from 'react'

export default function EditProductModal() {
   return (
      <div class="p-6 rounded-lg shadow-md">
         <form>
            <div class="mb-4">
               <label for="name" class="text-slate-50 font-bold mb-2">Product Title</label>
               <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Product title" />
            </div>

            <div class="mb-4">
               <label for="description" class="block text-slate-50 font-bold mb-2">Description</label>
               <textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5">Description</textarea>
            </div>

            <div class="mb-4">
               <label for="price" class="block text-slate-50 font-bold mb-2">Price:</label>
               <input type="text" id="price" name="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="$100.00" />
            </div>

            <div class="mb-4">
               <label for="quantity" class="block text-slate-50 font-bold mb-2">Quantity:</label>
               <input type="number" id="quantity" name="quantity" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="10" />
            </div>

            <div class="flex items-center justify-between">
               <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
               <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete Product</button>
            </div>
         </form>
      </div>
   )
}
