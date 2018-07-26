import React from 'react';

class OnionHater extends React.Component {
  
  render() {
    return (
      <textarea onChange={onChangeListener}></textarea>
    );
  }
}

const onChangeListener = (event) =>{
  if (event.currentTarget.value.toLowerCase().includes('cebolla'))
  {
    alert('ODIO LA CEBOLLA');
  }
};

export default OnionHater;
//toLowerCase para reconocer ya sea mayúsculas o minúsculas.
//includes para que incluya todos los textos que contentan la palabra cebolla.