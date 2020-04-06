import React, { useState } from "react";
import axios from 'axios';

const RedirectUrlComponent= () => {

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

    const submitHandler = e => {
        e.preventDefault();
        const data = {
            short_url: values.short_url
        }
        axios.post('http://localhost:3001/search', { data })
            .then(res=>{
                window.open(res.data.original_url, '_blank');
            })
    };

  const [values, setValues] = useState({short_url: ''})

  return(
      <form onSubmit={submitHandler}>
        <label>
          Get me to the original URL :
          <input
              name='short_url'
              onChange={handleInputChange}
              value={values.short_url}/>
        </label>
        <br />
        <button>GO!</button>
      </form>
  )
}

export default RedirectUrlComponent