import React, { useState } from 'react'
const initData = {
    name: '',
    address: '',
    phone: '',
    email: ''
}

export const Form = () => {
    const [formData, setFormData] = useState(initData);
    const handleChange = (e)=>{
            // in ra giá trị của ô input đang nhập
            // console.log(e.target.value);

            // let key = e.target.name;
            // let value = e.target.value;
            let {name,value} = e.target;

            setFormData({...formData, [name] : value})
    }

    console.log(formData);
  return (
    <div>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' onChange={handleChange}/><br />
            <label htmlFor="name">Address:</label>
            <input type="text" name='address' onChange={handleChange} /><br />
            <label htmlFor="name">Phone:</label>
            <input type="text" name='phone' onChange={handleChange}/><br />
            <label htmlFor="name">Email:</label>
            <input type="text" name='email' onChange={handleChange}/><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
