import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiService } from '../../api.services';
import { ArrowRightIcon } from '@chakra-ui/icons'
interface Props{
    id: string;
}
const LaunchClick = ({ id }: Props) => {
  const [name, setName] = useState('')
  const [buttonBg,setButtonBg] = useState('white')
    const navigate = useNavigate()
    const launchClickHandler = () => {
        navigate(`/launch/${id}`)
    }
    useEffect(() => {
    const fetchLaunch = async () => {
        const res = await ApiService.getOneLaunch(id)
        setName(res.data.name)
    }
    fetchLaunch()
  },[])
  return (
    <Flex alignItems={'center'} cursor={'pointer'} p={3} w={200} background={buttonBg} color={"black"} mt={2} onClick={launchClickHandler} onMouseOver={()=>setButtonBg('linear-gradient(to right, #d3cce3, #e9e4f0)')} onMouseLeave={()=>setButtonBg('white')} rounded={'md'}>
      <Text>{name}</Text>
      <ArrowRightIcon ml={'auto'} />
    </Flex>
  )
}

export default LaunchClick