import React from 'react'
import * as Loader from 'react-loader-spinner';


export const Loading = () => {
  return (
    <div className='flex justify-center item-center'>
        <Loader.TailSpin type='puff' color="#00BFFF" height={550} width={80}  />
    </div>
  )
}
