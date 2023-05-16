import React, { useRef, useState } from 'react'


export const Card = () => {
    let image1 = 'https://wallpapers.com/images/hd/cool-picture-wolf-art-o0ixt449edz5dgpa.jpg'
    let image2 = 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    let image3 = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg'
    let image4 = "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    const images = [{src: image1, id: 1}, {src: image2, id: 2}, {src: image3, id: 3}, {src: image4, id: 4}];
    
    const [Spot, setSpot] = useState(0);
    


    const changeImage = () => {
        return (
            <>
            {setSpot(current => current + 1)};
            {console.log(Spot)}
            {Spot >= images.length - 1 ? setSpot(current => current * 0) : null}
            </>
        )
    }

    

  return (
    <div className='flex flex-col w-48 border rounded-3xl border-slate-900 border-solid bg-teal-600'>
        <div className=' font-bold border-b border-y-black'>
            Header
        </div>
        <div className='border-b border-y-black '>
            <img className='h-auto max-w-lg w-48 p-8 rounded-t-lgmd:h-auto' src={images[Spot].src} alt="Click 'Change' to change picture" />
            <button className=' bg-white w-48 rounded-xl font-bold' onClick={() => {
                changeImage();
              }}>Change</button>
        </div>
        <div>
            <button className=' border bg-fuchsia-800 font-bold text-white'>
            Random images. 
            </button>
        </div>
    </div>
  )
}
