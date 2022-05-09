
import {Button,FormLabel,FormControl,Input,Stack,ButtonGroup,InputGroup,useToast,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { FcApproval } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { current, editpassword } from '../Redux/Actions/authActions'


const PopformMdp =({ firstFieldRef, onCancel })=> {

  const dispatch = useDispatch()

  const {id}=useParams()
  useEffect(()=>{
      dispatch(current())
  },[])
  const user = useSelector(state=>state.authReducer.user)

  const toast = useToast()
  const handleEditMdp=(e)=>{
    e.preventDefault()
    dispatch(editpassword(id,{password}))
    toast({
    
      description: "Vos informations ont été modifié avec succés",
      status: 'info',
      duration: 3000,
      isClosable: true,
    })

    ;
  
}
    
  const [password,setPassword] = useState('')
  const [passwordOG,setPasswordOG] = useState("")

                
                
    
  
    return (
      <Stack spacing={1}>

        <FormControl mt={3}>
        <div id="approval">
        <FormLabel>Ancien Mot de passe</FormLabel>
        {passwordOG === user.password ? <FcApproval id="approvalicon"/> : null}
                </div>
        <InputGroup id="divnum">
        <Input type='password' ref={firstFieldRef} onChange={(e)=>setPasswordOG(e.target.value)}/>
        
        </InputGroup>
        </FormControl>
        
        <FormControl mt={3}>
        <FormLabel>Nouveau Mot de passe</FormLabel>    
        <InputGroup id="divnum">
        <Input type='password' ref={firstFieldRef}  onChange={(e)=>setPassword(e.target.value)} isDisabled={passwordOG === user.password ? false : true}/>
        </InputGroup>
        </FormControl>


        <FormControl mt={3}>
        <FormLabel>Retapez votre Mot de passe</FormLabel>
        <InputGroup id="divnum">
        <Input type='password' ref={firstFieldRef} isDisabled={passwordOG === user.password ? false : true}/>
        </InputGroup>
        </FormControl>

        
        <ButtonGroup d='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Annuler
          </Button>
          <Button colorScheme='teal' onClick={handleEditMdp} isDisabled={ password === '' ? true : false}>
            Enregistrer
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }
  
  
export default PopformMdp