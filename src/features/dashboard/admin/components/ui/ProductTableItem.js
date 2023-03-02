import React from 'react'

export default function ProductTableItem() {
   return (
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <td class="w-4 p-4">
            <div class="flex items-center">
               <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
               <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
         </td>
         <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Apple MacBook Pro 17"
         </th>
         <td class="px-6 py-4">
            Silver
         </td>
         <td class="px-6 py-4">
            Laptop
         </td>
         <td class="px-6 py-4">
            Yes
         </td>
         <td class="px-6 py-4">
            Yes
         </td>
         <td class="px-6 py-4">
            $2999
         </td>
         <td class="px-6 py-4">
            3.0 lb.
         </td>
         <td class="flex items-center px-6 py-4 space-x-3">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
         </td>
      </tr>
   )
}
