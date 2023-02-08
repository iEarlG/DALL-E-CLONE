import React from 'react';

const FormField = ({ labelName, type, placeholder, name, value, handleChange, handleSurpriseMe, isSurpriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button 
            type="button" 
            onClick={handleSurpriseMe} 
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>

      <input 
        type={type} 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469FF] 
        focus:border-[#6469FF] outline-none block w-full p-3"
        required
      />
    </div>
  )
}

export default FormField;