import React from 'react';
import './ImageLinkedForm.css';

const ImageLinkedForm = ({ onInputChange, onButtonSabmit }) => {
  return (
    <div>
      <p className="f3 center">{' this is magic'}</p>
      <div className="center">
        <div className=" center form pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple "
            onClick={onButtonSabmit}>
            detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkedForm;
