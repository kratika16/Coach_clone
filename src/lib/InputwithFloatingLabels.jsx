import React from 'react'

const InputwithFloatingLabels = ({label, inputProps, onChange, value}) => {
  return (
    <div className="relative border border-ghost rounded ">
       <input
         className=" focus: ring-sky-500 focus:ring-1 block  p-4 w-full bg-transparent text-base text-gray-900 appearance-none dark:text-white dark:border-gray-600  focus:outline-none"
         {...inputProps}
         onChange={onChange}
         value= {value}
       />
       <label className="absolute text-base  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
        {label}
       </label>
    </div>
  )
}

export default InputwithFloatingLabels