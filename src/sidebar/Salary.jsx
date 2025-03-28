import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
     <h4 className='text-lg font-medium mb-4'>Salary</h4>
     <div  className="flex space-x-1 w-full">
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="yearly" title="Yearly"/>
     </div>
     <div className='mt-4'>
     <label className='sidebar-label-container'>
            <input 
            type="radio" 
            name="test" 
            id="test" 
            value="" 
            onChange={handleChange}
            />
            <span className='checkmark'></span> All
     </label>
        <InputField 
        handleChange={handleChange} 
        value={30}
        title="< 30000K" 
        name="test2"  
        />
        <InputField 
        handleChange={handleChange} 
        value={50}
        title="< 500000K" 
        name="test2"  
        />
        <InputField 
        handleChange={handleChange} 
        value={80}
        title="< 800000K" 
        name="test2"  
        />
         <InputField 
        handleChange={handleChange} 
        value={100}
        title="< 1000000K" 
        name="test2"  
        />

     </div>
    </div>
  )
}

export default Salary
