import React from 'react'
import Input from '../Input'
import Button from "../Button"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IoSearch,RxCross2 } from "../icons"

const Search = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, watch } = useForm()

  const search = (data) => {
    const query = data?.query;
    console.log(query)
    // navigate(`/search/${query}`)
  }
  const clearSearch =()=>{
    setValue("query","")
  }
  const searchTerm = watch('query')
  return (
    <div >
      <form onSubmit={handleSubmit(search)} className='flex items-center bg-[#3e3e3e] rounded-md  '>
      <label className="flex py-1 items-center space-x-2 w-full">
        {/* Icon as part of the label */}
        <div className="px-1">
          <IoSearch color="white" size="30" />
        </div>
        {/* Input field */}
        <input
          type="text"
          placeholder="Search"
          className="outline-none px-2 py-1 bg-[#3e3e3e] text-white rounded-md"
          {...register("query", { required: true })}
        />
      </label>
        <div className=''>
          {searchTerm && <Button type='button' onClick={clearSearch}  className='p-0 flex justify-end items-center' children=<RxCross2 size="30" color='white'/>/>}
        </div>
      </form>
    </div>
  )
}

export default Search
