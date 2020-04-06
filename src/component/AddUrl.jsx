import React, { useState } from "react";
import axios from 'axios';

const AddUrlComponent= () => {

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const submitHandler = e => {
    e.preventDefault();
      const data = {
          title: values.title,
          original_url: values.original_url
      }
      axios.post('http://localhost:3001/urls', { data })
          .then(res=>{
          })
  };

  const [values, setValues] = useState({})

  return(
      <form onSubmit={submitHandler}>
        <label>
          Title:
          <input
              name='title'
              label='title of the Url to save'
              onChange={handleInputChange}
              value={values.title}/>
        </label>
          <label>
              Title:
              <input
                  name='original_url'
                  label='Url long'
                  onChange={handleInputChange}
                  value={values.original_url}/>
          </label>
        <br />
        <button>Submit</button>
      </form>
  )
}

export default AddUrlComponent