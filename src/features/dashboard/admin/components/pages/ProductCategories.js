import React from 'react'

export default function ProductCategories() {
   return (
      <div className='flex flex-col gap-2 lg:flex-row'>
         <div className='rounded px-4 py-6 border-2 border-gray-500 border-dashed dark:bg-gray-800 lg:w-4/5'>
            <form id='add-product-category'>
               <div className="mb-6">
                  <input onChange={(e) => { }} type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" value={''} required />
               </div>
               <div className="mb-6">
                  <textarea rows="4" onChange={(e) => { }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" value={''} />
               </div>

               <div className="mb-4 flex justify-between items-center gap-2">
                  <div className="lg:w-1/2">
                     <input onChange={(e) => { }} type="text" id="regular-price" name="regular_price" className="w-full py-2 px-3 text-gray-400 leading-tight rounded focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder="Regular Price" value={''} />
                  </div>
                  <div className="lg:w-1/2">
                     <input onChange={(e) => { }} type="text" id="selling_price" name="selling_price" className="w-full py-2 px-3 text-gray-400 leading-tight rounded focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder="Selling Price" value={''} />
                  </div>
               </div>
               <div className="mb-6 flex justify-between gap-2">
                  <div className="lg:w-1/2">
                     <input onChange={(e) => { }} type="text" id="quantity" name="quantity" className="w-full py-2 px-3 text-gray-400 leading-tight rounded focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder="Quantity" value={''} />
                  </div>
                  <div className="flex gap-1 lg:w-1/2">
                     <input onChange={(e) => { }} type="text" id="discount" name="discount" className="w-full py-2 px-3 text-gray-400 leading-tight rounded focus:outline-none focus:shadow-outline dark:bg-gray-700" placeholder='Discount' value={''} />

                     <select id="discount-type" onChange={(e) => { }} className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option className="text-xs" defaultValue={"Type"} >Type</option>
                        <option className="text-xs" value="%">%</option>
                        <option className="text-xs" value="flat">Flat</option>
                     </select>

                  </div>
               </div>
               <div className="mb-6">
                  <input onChange={(e) => { }} type="text" id="tags" name="tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tags" value={''} />
               </div>
               <div>
                  <textarea onChange={(e) => { }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description" value={''} />
               </div>
            </form>

         </div>
         <div className='flex flex-col px-4 py-6 rounded border-2 border-gray-500 border-dashed dark:bg-gray-800'>
            <div className="mb-6">
               <div id="categorySearch" className="z-10 bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="p-3">
                     <label htmlFor="input-group-search" className="sr-only">Search Category</label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                           <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input onChange={''} type="text" id="input-group-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Category" />
                     </div>
                  </div>
                  <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-11" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
                        </div>
                     </li>
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input defaultChecked id="checkbox-item-12" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-12" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese Leos</label>
                        </div>
                     </li>
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input id="checkbox-item-13" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-13" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
                        </div>
                     </li>
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input id="checkbox-item-14" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-14" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert Wall</label>
                        </div>
                     </li>
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input id="checkbox-item-15" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-15" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph Mcfall</label>
                        </div>
                     </li>
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input id="checkbox-item-16" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-16" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
                        </div>
                     </li>
                     <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                           <input id="checkbox-item-17" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                           <label htmlFor="checkbox-item-17" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               <div className="featured-imge-upload mb-6">
                  <span className="block mb-2 dark:text-white">Add Featured Image :</span>
                  {/* <div className="flex items-center justify-center w-full">
               <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                     <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                     <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
               </label>
            </div> */}
                  <input onChange={(e) => { }} type="text" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Paste Image URL" value={''} />
               </div>
            </div>

            <div className="flex items-center justify-between lg:order-first lg:mb-4">
               <button type="button" className="text-white font-bold py-2 px-6  rounded border-2 border-gray-700 focus:outline-none focus:shadow-outline lg:px-4">Save Draft</button>
               <button type="submit" form='add-product' className="bg-blue-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed lg:px-4">Publish</button>
            </div>
         </div>
      </div>
   )
}
