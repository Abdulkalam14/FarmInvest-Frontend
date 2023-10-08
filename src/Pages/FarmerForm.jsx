import React from 'react'

const FarmerForm = () => {
  return (
    <div class="w-full max-w-2xl mx-auto mt-10 flex">
    <div class="p-6 border border-gray-600 sm:rounded-md bg-gray-800">
      <form>
      <div className='border border-gray-600 p-3 mb-4 rounded-xl'>
        <h1 className='text-gray-50 font-bold text-xl mb-3'>Crop Details</h1>
        <div className='flex flex-row gap-x-5'>
        <label class="block mb-6">
          <span class="text-gray-300">Crop Name</span>
          <input name="name" type="text" class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300" placeholder="Crop"/>
        </label>
        <label class="block mb-6">
          <span class="text-gray-300">Date of harvest</span>
          <input name="name" type="text" class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300" placeholder="dd/mm/yyyy"/>
        </label>
        </div>
        <div className='flex flex-row gap-x-5'>
        <label class="mb-6">
          <span class="text-gray-300">Quantity (kgs)</span>
          <input name="name" type="text" class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300" placeholder="Quantinty (kgs)"/>
        </label>
        <label class="mb-6">
          <span class="text-gray-300">Cost (₹/kg)</span>
          <input name="name" type="text" class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300" placeholder="Cost (₹/kg)"/>
        </label>
        <label class="mb-6">
          <span class="text-gray-300">Demanded Return(₹)</span>
          <input name="name" type="text" class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300" placeholder="Demanded Return (₹)"/>
        </label>
        </div>
      </div>
        
          
        <div class="flex justify-end mb-6 gap-4">
          <button type="submit"class="h-10 px-5 text-white bg-green-500 rounded-lg duration-150 focus:shadow-outlin hover:bg-green-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default FarmerForm