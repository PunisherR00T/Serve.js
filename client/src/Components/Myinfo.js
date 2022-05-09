import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/authActions"
import {  FormLabel, InputRightElement, Tooltip} from "@chakra-ui/react"
import {Popover,PopoverTrigger,PopoverContent,PopoverArrow,PopoverCloseButton,Button,useDisclosure,FormControl,Input,InputGroup,InputLeftAddon,} from '@chakra-ui/react'
import React from 'react'
import '../App.css'
import Taswira from "./Taswira"
import PopformNum from './PopformNum'
import { EditIcon } from "@chakra-ui/icons"
import FocusLock from "react-focus-lock"
import PopformMdp from "./PopformMdp"

const Myinfo = () => {
  
  
  
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    const dispatch = useDispatch()
    
    const { onOpen2, onClose2, isOpen2 } = useDisclosure()
    const firstFieldRef2 = React.useRef(null)

    const { onOpen1, onClose1, isOpen1 } = useDisclosure()
    const firstFieldRef1 = React.useRef(null)
  
    
    return (
        <div id='Addpost'>
            
            <FormControl>
                <FormLabel>Prénom</FormLabel>
                <InputGroup size='md'>
                <Input placeholder='Prénom'  value={user.firstname} readOnly />
               
                    
                    </InputGroup>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Nom</FormLabel>
                <InputGroup size='md'>
                <Input placeholder='Nom' value={user.lastname} readOnly/>
               
                    </InputGroup>
                    </FormControl>
              
            

              <FormControl mt={4}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                
                <Input  id='email' type='email' placeholder="Entrez votre email" readOnly defaultValue={user.email} />
               
                </FormControl>
              <FormControl mt={4}>
              <div id="changemdpflex">
                <FormLabel>Mot de Passe</FormLabel> 
                
                </div>
                <InputGroup size='md'>
                    <Input  pr='4.5rem' type='password' placeholder='Entrez un mot de passe' value={user.password} readOnly/>
                    <InputRightElement width='4.5rem'>
                    <Popover
        isOpen={isOpen1}
        initialFocusRef={firstFieldRef1}
        onOpen={onOpen1}
        onClose={onClose1}
        placement='right'
        closeOnBlur={false}
      >
        
        <PopoverTrigger>
        <Button h='1.75rem' size='sm' colorScheme='teal' variant='ghost'><Tooltip label="Modifier votre numéro"><EditIcon id="settingsicon"/></Tooltip></Button>
        </PopoverTrigger>
        
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopformMdp firstFieldRef={firstFieldRef1} onCancel={onClose1} />
          </FocusLock>
        </PopoverContent>
      </Popover>
                    </InputRightElement>
                </InputGroup>
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel>Numéro</FormLabel>
                <InputGroup id="divnum">
                    <InputLeftAddon children={<Taswira />} />
                    <Input  type='tel' placeholder='Votre numéro de téléphone' maxLength="8" value={user.phone} readOnly/>
                    <InputRightElement width='4.5rem'>
                    
                      
                    <Popover
        isOpen={isOpen2}
        initialFocusRef={firstFieldRef2}
        onOpen={onOpen2}
        onClose={onClose2}
        placement='right'
        closeOnBlur={false}
      >
        
        <PopoverTrigger>
        <Button h='1.75rem' size='sm' colorScheme='teal' variant='ghost'><Tooltip label="Modifier votre numéro"><EditIcon id="settingsicon"/></Tooltip></Button>
        </PopoverTrigger>
        
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopformNum firstFieldRef={firstFieldRef2} onCancel={onClose2} />
          </FocusLock>
        </PopoverContent>
      </Popover>
      
                   
                    </InputRightElement>
                </InputGroup>
              </FormControl>
              
              
              
        </div>
    )
}

export default Myinfo