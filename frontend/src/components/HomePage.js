import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'

const HomePage = () => {
    return (
        <Container>
            <Box
                d="flex"
                justifyContent='center'
                p={3}
                bg={'white'}
                w="100%"
                m="40px 0 15px 0"
                borderRadius={'lg'}
                borderWidth="1px"
            >
                <Text fontSize="4xl" fontFamily="work sans" textAlign="center">Connect US</Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs>
                    <TabList>
                        <Tab w="50%">Login</Tab>
                        <Tab w="50%">Signup</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HomePage