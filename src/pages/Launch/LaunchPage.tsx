import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../api.services'

function LaunchPage() {
  const { id } = useParams()
  useEffect(() => {
    console.log(id)
    const fetchLaunch = async () => {
      const res = await ApiService.getOneLaunch(id)
      console.log(res.data)
    }
    fetchLaunch()
  },[])
  
  return (
    <div></div>
  )
}

export default LaunchPage