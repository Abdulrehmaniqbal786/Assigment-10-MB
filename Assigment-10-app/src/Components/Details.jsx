import React from 'react'
import { useParams } from 'react-router-dom'
import { Card_data } from './Cards_data'

const Details = () => {
  const params = useParams()

  const filtered = Card_data.filter((Card_data)=> {
   return Card_data.id == params.id
  })

  console.log(filtered)



  return (
    <div>
      
       {params.id}</div>
   
  )
}
export {Details}