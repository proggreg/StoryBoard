"use client"
import { useState } from "react";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
export default function ImagePicker() {
  const [images, setImages] = useState([{
    src: 'https://via.placeholder.com/150',
    alt: 'placeholder',
    filename: 'image.png'
  },
  {
    src: 'https://via.placeholder.com/150',
    alt: 'placeholder',
    filename: 'image.png'
  },{
    src: 'https://via.placeholder.com/150',
    alt: 'placeholder',
    filename: 'image.png'
  },
  {
    src: 'https://via.placeholder.com/150',
    alt: 'placeholder',
    filename: 'image.png'
  }]);

  return (
      <div className="flex flex-col items-center justify-between gap-2 basis-1/3 px-4">
        <div className="divide-y divide-solid w-[300px]">
        <div className="flex flex-col items-center">
          <input type="file" id="image-picker" accept="image/*" />
        </div>
          <ul className="">{images.map((image) => (
            <li className="m-4 flex items-center gap-2" key={image.src}>
              <Image width={30} height={30} alt={image.alt} src={image.src} />
              <span>{image.filename}</span>
              <TiDeleteOutline className="text-xl" />
            </li>))}
          </ul>
          <div className="flex flex-col justify-center gap-2 p-4">
            <div className="flex gap-2">
              <input id="horizontal" type="radio" name="direction" />
              <label htmlFor="horizontal">Horizontal Collage</label>
            </div>
            <div className="flex gap-2">
              <input id="vertical" type="radio" name="direction" />
              <label htmlFor="vertical">Vertical Collage</label>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2 p-2">
              <label>Border</label>
              <input className="border" type="text"/>
            </div>
            <div className="flex gap-2 p-2">
              <label>Colour</label>
              <input className="border" type="text"/>
            </div>

            </div>
          </div>
          <div className="flex justify-center p-4">
            <button className="w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Collage</button>
          </div>
      </div>
  );
}