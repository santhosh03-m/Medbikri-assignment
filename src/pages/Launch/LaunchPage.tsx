import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiService } from '../../api.services'
import { Badge, Box, Button, Flex, Spinner, Text, VStack } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
interface dateObj{
  year: string;
  month: string;
  day: string;
  hour: string;
  min: string;
  sec: string;
}
function LaunchPage() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [date, setDate] = useState<dateObj>()
  const [reused,setReused] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    console.log(id)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const fetchLaunch = async () => {
      const res = await ApiService.getOneLaunch(id)
      console.log(res.data)
      const { name, details, date_utc: date, fairings } = res.data
      const dateObj  = {
        year:date.split('T')[0].split('-')[0] ,
        month: months[date.split('T')[0].split('-')[1]-1],
        day:date.split('T')[0].split('-')[2]+'th' ,
        hour:date.split('T')[1].split(':')[0] ,
        min:date.split('T')[1].split(':')[1] ,
        sec:date.split('T')[1].split(':')[2].split('.')[0] ,
      }
      setName(name)
      setDetails(details)
      setDate(dateObj)
      console.log(fairings.reused)
      setReused(fairings.reused)
      setIsLoading(false)
    }
    fetchLaunch()
  },[])
  
  return (
    <Box fontSize={'1rem'} fontFamily={"monospace"} p={3} maxW={'700px'} m={'auto'}>
      <Link to='/'>
        <Button background={"#2c5364"} color={"white"} mx={3} mt={3} leftIcon={<ArrowLeftIcon />}> BACK</Button>
      </Link>
      {isLoading ?<Box  mt={5}textAlign={'center'}> <Spinner size="xl" /></Box> : (
        <Box  border={'4px'} borderColor={'white'}color={"white"} bgGradient="linear(to right, #0f2027, #203a43, #2c5364)" p={6} mt={5} rounded={'md'}>
              <Text fontSize={'3xl'} fontWeight={'extrabold'}>{name}</Text>
              <Text mb={8}>{!details?'No description':details}</Text>
        <Flex wrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
              {reused?<Badge variant={"solid"} colorScheme={'green'}>Reused</Badge>:<Badge variant='solid' colorScheme={'red'}>Not reused</Badge>}
              <Text fontWeight={'black'} mb={2}>{`${date?.day} ${date?.month} ${date?.year}  ${date?.hour}:${date?.min}:${date?.sec}`}</Text>
          
          </Flex>
      </Box>
      )
      }
      
    </Box>
    
    
  )
}

export default LaunchPage