import { useState } from 'react'
import React from 'react';
import './style.scss';

function Card () {
    const [count, setCount] = useState(0)
    return (
        <>
        <div className='main'>
        <div>
          <img src='./src/assets/avatar.png' alt="Dog picture" />
      </div>

        <div>
            <h1>Poppy</h1>
        </div>

       <p>
       Voici mon Bouledogue Français ! 
       </p>
       <div>
       <button onClick={() => setCount((count) => count + 1)}>
         Nombres de like : {count} 👍
       </button>
       </div>
       </div>
       </>
    );
}

export default Card;