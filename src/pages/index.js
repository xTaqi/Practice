import { Card } from "@/components/Card"
import DataFetching from "@/components/DataFetching"
import { useState } from "react"
import {fullData} from "src/data/todo.js"

const App = () => {
  let hey = ''
  const [active, setActive] = useState(false);

  const [tailw, setTailw] = useState('');

  const addBG = () => {
    setActive(!active);
  }

  console.log(fullData);

  const changeClassName = () => {
    setTailw({ className: ' bg-amber-700' });
  }

  return (
    <div className=" text-center">
      <h1 className=" m-4 text-5xl font-bold underline text-white">
        Image Carouselle
      </h1>
      <h1 className=" text-white text-2xl">
        using photo api
      </h1>
      <ul>
        
        <li>
          <DataFetching/>
          <p >First <button onClick={ () => 
          {addBG();
          active ? hey='bg-amber-700' : ''}}
          className='border border-double '> button</button></p>
        </li>
        <li>
          <p>Second <button className='border border-double text-white' onClick={() => alert('🧑🏿‍❤️‍💋‍🧑🏾')} > Click Here</button></p>
        </li>
        <li>
          <form>
            <label ></label>
            <input type='text' onChange={(e) => {}}/>
          </form>
        </li>
        <li>
          Hi
        </li>
      </ul>
    </div>
  )
}

export default App