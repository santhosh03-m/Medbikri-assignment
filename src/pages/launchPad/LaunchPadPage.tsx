import React, { useEffect } from 'react'
import { ApiService } from '../../api.services'

function LaunchPadPage() {
  useEffect(() => {
    const fetchLauchPads = async () => {
      const res = await ApiService.getAllLaunchPad()
      console.log(res.data)
    }
    fetchLauchPads()
  },[])
  return (
    <div>LaunchPad</div>
  )
}

export default LaunchPadPage