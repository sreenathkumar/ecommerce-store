import React, { useState } from 'react'
import placeHolderImage from '../../../../../assets/placeholder_image.png'
import ContentTable from '../../../../../components/ui/ContentTable';
export default function ProductCategories() {
   const [categryTitle, setCategryTitle] = useState('');
   const [categoryDescription, setCategoryDescription] = useState('');
   const [categoryParent, setCategoryParent] = useState('None');
   const [categoryThumbnail, setCategoryThumbnail] = useState('');
   const tableHeads = ['Thumbnail', 'Category name', 'Description', 'Parent', 'Action']
   return (
      <div className='flex flex-col gap-2 lg:flex-row'>
         <div className='rounded px-4 py-6 border-2 border-gray-500 border-dashed dark:bg-gray-800 lg:w-4/5'>
            <ContentTable tableHeads={tableHeads}>

            </ContentTable>
         </div>
         <div className='flex flex-col px-4 py-6 rounded border-2 border-gray-500 border-dashed dark:bg-gray-800'>
            <form id='add-product-category'>
               <div className="mb-6">
                  <input onChange={(e) => { setCategryTitle(e.target.value) }} type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" value={categryTitle} required />
               </div>
               <div className="mb-6">
                  <textarea rows="4" onChange={(e) => { setCategoryDescription(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" value={categoryDescription} />
               </div>

               <div className=' flex justify-between gap-1 mb-6'>
                  <div className='w-1/2'>
                     <span className="block mb-2 dark:text-white">Thumbnail: </span>
                     <img class="w-14 h-14 rounded" alt='category-thumbnail' src={categoryThumbnail || placeHolderImage} />
                  </div>
                  <div className="w-3/4 lg:w-1/2">
                     <span className="block mb-2 dark:text-white">Parent: </span>
                     <select id="discount-type" onChange={(e) => { setCategoryParent(e.target.value) }} className="bg-gray-50 border text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option className="text-xs" defaultValue={categoryParent} >None</option>
                        <option className="text-xs" value="%">%</option>
                        <option className="text-xs" value="flat">Flat</option>
                     </select>
                  </div>
               </div>
            </form>
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
                  <input onChange={(e) => { setCategoryThumbnail(e.target.value) }} type="text" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Paste Image URL" value={categoryThumbnail} />
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
