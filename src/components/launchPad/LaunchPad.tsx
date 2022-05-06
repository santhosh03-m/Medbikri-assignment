import { Badge, Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import LaunchClick from '../launchSelect';
import styles from './styles.module.css'

interface props{
    name: string;
    fullName: string;
    details: string;
    status: string;
    launches: [string];
}
export const LaunchPad = ({ name, fullName, details,status, launches }:props) => {
  return (
    <Box className={styles.launch_pad} fontSize={'1rem'} fontFamily={"monospace"} bgGradient="linear(to right, #0f2027, #203a43, #2c5364)" color={"white"} m={'auto'} p={6} maxW={'800px'} rounded={'md'} border={'4px'} borderColor={'white'}>
            <Text fontSize={'3xl'} fontWeight={'extrabold'}>{name}</Text>
            <Text mb={8}fontWeight={'bold'}>{fullName}</Text>
            <Text mb={4} >{details}</Text>
            <Flex alignItems={"flex-start"} justifyContent={"space-between"}wrap={"wrap"}>
                {status==='active'?<Box>< Text fontWeight={'bold'}>STATUS</Text> <Badge variant='solid' colorScheme={'green'}>{status}</Badge> </Box>:''}
                {status==='under construction'?<Box><Text fontWeight={'bold'}>STATUS</Text> <Badge variant='solid' colorScheme={'yellow'}>{status}</Badge> </Box>:''}
                {status==='retired'?<Box><Text fontWeight={'bold'}>STATUS</Text> <Badge variant='solid' colorScheme={'red'}>{status}</Badge> </Box>:''}
            <Box mt={-3}>
            <Text fontWeight={'bold'} mt={3}>LAUNCHES</Text>

            {!launches.length ? 'No launches' : (launches.slice(0, 3).map(id => <LaunchClick id={id}></LaunchClick>))}
            </Box>    
            </Flex>
          </Box>
  )
}
