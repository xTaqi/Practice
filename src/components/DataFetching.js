import React, {useState, useEffect} from 'react'
import axios from 'axios'


const savedArray = [];


 function DataFetching() { 
    const [images, setImages] = useState([])
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomIntPlus1 () {
        return x+1
    }
    function getPreviousInt() {
        return savedArray[savedArray.length - 2] + 1;
    }
    let x = getRandomInt(3001);

    const fetchImage = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
        const random = data[x].url;
        
        setImages(random);
    }

    const changeImage = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
        const random = data[x].url;
        console.log('XXXXX');
        console.log(data[0].url);
        console.log('XXXXX');
        savedArray.push(x);
        setImages(random);
    }
    
    
    const lastImage = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos")
        const last = data[getPreviousInt()-1].url;
        savedArray.pop();
        setImages(last);
        console.log('OOOOOOO');
        console.log(last);
        console.log('OOOOOOO');
    }
    
    useEffect(() => {
        fetchImage();
    },[])
    
    {console.log(savedArray)}
    {console.log(x)}
    console.log(getRandomIntPlus1());
    console.log('TTTT');
    console.log(images);
    console.log(getPreviousInt()+1);
    console.log('B123OOOO');
    console.log(savedArray[savedArray.length - 2]);
    console.log('WOOO');

    return (
    <div>
        <ul>
            {/* {
                images.map(image => 
                    <img key={image.id} src={image.url}></img>
                )
            } */}
            <div className=" items-center justify-center flex">
                <button className=" font-bold border border-solid rounded-md p-3 m-6 bg-cyan-900 text-white" onClick={() => savedArray.length === 1 ?  alert('Cant go backwards') : lastImage()}>Backwards</button>
                <img src={images}/>
                <button className=' font-bold border border-solid rounded-md p-3 m-6 bg-cyan-900 text-white' onClick={changeImage}>Forward</button>
        </div>
            {/* {respo} */}
        </ul>
    </div>
  )
}

export default DataFetching