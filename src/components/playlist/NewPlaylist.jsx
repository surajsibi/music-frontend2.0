import React from 'react'
import { useForm } from "react-hook-form";
import { Input, Button } from '../index'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { RiGitRepositoryPrivateLine, MdPublic } from "../icons"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { changeNewPlaylist } from '../../store/Slice/utilsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { createPlaylist } from '../../store/Slice/playlistSlice';
import { addSongToPlaylist } from '../../store/Slice/playlistSlice';


const NewPlaylist = () => {
  const select = [
    { name: 'Public', icon: MdPublic },
    { name: 'Private', icon: RiGitRepositoryPrivateLine },
  ]
  const dispatch = useDispatch();
  const songId = useSelector(state => state.utils.newPlaylist)
  console.log(songId);




  const [selected, setSelected] = useState(select[0])
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();


  const handleSelectionChange = (value) => {
    setSelected(value);
    setValue("visibility", value.name); // Store the selected value in form data
  };

  const submit = async (data) => {


    const createdPlaylist = { name: data.title, description: data.description, isPublic: data.visibility === "Public" ? true : false }

    const response = await dispatch(createPlaylist(createdPlaylist));

    if (songId.songId) {
      await dispatch(addSongToPlaylist({ songId: songId.songId, playlistId: response.payload._id }))

    }

    await dispatch(changeNewPlaylist());
  }
  const close = () => {
    dispatch(changeNewPlaylist());
  }

  const handleReset = () => {
    reset();
    setSelected(select[0])
  }


  return (
    <div className='w-[60%] bg-[#212121] h-[60%]'>
      <div className='text-white py-5 px-8  font-bold text-2xl flex justify-between'>
        New playlist
        <div onClick={close} className='cursor-pointer hover:bg-gray-600 px-2 rounded-lg'>x</div>
      </div>
      <div className='mt-2' >
        <form onSubmit={handleSubmit(submit)} className='px-5 flex flex-col gap-8'>
          <div className='border-b'>
            <Input
              className="bg-transparent border-b border-gray-500 text-white"
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>
          <div className='border-b'>
            <Input
              type="text"
              className="bg-transparent borber-b border-gray-500 text-white"
              placeholder="Description"
              {...register("description")}
            />
          </div>

          <div>
            <Listbox value={selected} onChange={handleSelectionChange}>

              <ListboxButton
                className="text-white flex border-b-2 items-center border-blue-600 w-48 justify-between"
              >
                <div className='flex items-center justify-center gap-2 py-2 font-smeibold text-lg'>
                  {selected.icon && <selected.icon size={22} color='white' />}
                  {selected.name}</div>
                <ChevronDownIcon
                  className="group pointer-events-none  top-2.5 right-2.5 size-4 fill-white/60 "

                />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  'w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                  'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}>
                {select.map((person) => (
                  <ListboxOption
                    key={person.name}
                    value={person}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-white flex gap-2 font-semibold">{person.icon && <person.icon size={22} color='white' />} {person.name} </div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>

          </div>
          <input type="hidden" {...register("visibility")} value={watch("visibility") || selected.name} />

          <div className='w-full justify-end flex gap-5'>
            <Button
              type="submit"
              className="bg-indigo-700 text-white uppercase px-6 py-2 rounded-md mt-4 text-sm font-semibold"
              children="Create"
            />
            <Button
              onClick={handleReset}
              type="reset"
              className="bg-indigo-700 text-white uppercase px-6 py-2 rounded-md mt-4 text-sm font-semibold"
              children="Reset"
            />
          </div>

        </form>

      </div>

    </div>
  )
}

export default NewPlaylist
