import React, { useEffect, useState } from 'react'
import { ApiService } from '../../api.services'
import { LaunchPad } from '../../components/launchPad/LaunchPad'
import { Image, Spinner, Text,VStack } from '@chakra-ui/react'
const LaunchPadPage:React.FC=()=> {
  const [launchPads, setLaunchPads] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    const fetchLauchPads = async () => {
      setIsLoading(true)
      const res = await ApiService.getAllLaunchPad()
      setLaunchPads(res.data)
      setIsLoading(false)
      console.log(launchPads)
    }
    fetchLauchPads()
  }, [])
  
  return (
    <>
      
        <VStack mt={'5'} mx={3} p={3} spacing={10}>
         { isLoading ? <Spinner size="xl" /> : (
        
        launchPads?.map((launchPad : {name:string,full_name:string,id:string,details:string,status:string,launches:[string]}) => (
          <LaunchPad key={launchPad.id} name={launchPad.name}fullName={launchPad.full_name}details={launchPad.details}status={launchPad.status}launches={launchPad.launches}/>
              
            ))
          
        )}
        </VStack>
      
    
    </>
  )
}

export default LaunchPadPage