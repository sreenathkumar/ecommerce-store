import { useState } from "react"

export default function ImageUploadField({ handleFileUpload, index }) {
   const [remoteFile, setRemoteFile] = useState('');

   const handleRemoteFile = (e) => {
      setRemoteFile(e.target.value);
   }
   return (
      <div className="mb-6">
         <div className="mb-2 gallery-img">
            <input onChange={handleRemoteFile} type="text" name={`gallery-photo-${index}`} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Paste Image URL" value={remoteFile} />
         </div>
      </div>
   )
}
