import { useState } from 'react';
import Values from 'values.js';
import SingleColorComponent from './SingleColor';

function ColorList({ colorList }) {

  // console.log(colorList[0])

  return (
    <section className='colors'>
      {colorList.map((color, index) => {
        return <SingleColorComponent key={index} color={color} index={index}/>;
      })}
    </section>
  );
}

export default ColorList;
