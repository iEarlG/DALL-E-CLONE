import React from 'react';

import { downloadImage } from '../utils';
import { download } from '../assets';

const Card = ({ _id, prompt, photo, name }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img 
        src={photo} 
        alt={prompt} 
        className="w-full h-auto rounded-xl object-cover" 
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131F] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">
          {prompt}
        </p>

        <div className="flex justify-between items-center gap-2 mt-5">
          <div className="flex items-center gap-2">
            <div className="flex w-7 h-7 rounded-full object-cover bg-green-700 
              justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
        <button
          type="button"
          onClick={() => downloadImage(_id, photo)}
          className="outline-none border-none bg-transparent"
        >
          <img 
            src={download} 
            alt="download" 
            className="h-6 w-6 object-contain invert" 
          />
        </button>
        </div>
      </div>
    </div>
  )
}

export default Card;