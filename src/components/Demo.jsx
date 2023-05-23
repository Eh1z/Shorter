import React, { useState, useEffect} from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/*Search Bar*/}
      <div className='w-full flex flex-col gap-3'>
        <form onSubmit={() => {}}
        className='flex items-center justify-center relative'
        >
          <img src={linkIcon} alt="Link_Icon"
          className='left-0 my-2 ml-3 w-5 absolute'/>
          <input type="url" placeholder='Enter URL of Article' 
          value=""
          className='url_input peer'
          onChange={() => {}}
          required
          />
          <button type='submit' className='submit_btn peer-focus: border-purple-700 peer-focus:text-purple-700'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSEtjZKAxYKSx+QyjFhAMYYqDqE7p3H+QLU33jLCaNWoBw9AIojrFcwua7hslYEsyFPmgXuG8wH+m//sZGBgMcKUSsi2oVzhvADVcAF8yJMuCWuXzCYz//88nmIuQFJCUD0i2gJHhYNNdIwdsDsKZ0aBBdICBgYEfXxAR8iXenAyNZJAl+riCgCILYJrxJVOqWEDIEHzyFBd2hCwftYBQCNG+0gcAH1xNGUS+9NYAAAAASUVORK5CYII="/>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Demo