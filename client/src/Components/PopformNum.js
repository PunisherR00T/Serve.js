
import {Button,FormLabel,FormControl,Input,Stack,ButtonGroup,InputGroup,InputLeftAddon, useToast,} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { UpdatePhone } from '../Redux/Actions/authActions'

const PopformNum =({ firstFieldRef, onCancel })=> {

  
  const toastInfo = useToast()
  const toastError= useToast()
  const [phone,setPhone] = useState('')
  const user = useSelector(state=>state.authReducer.user)


  const dispatch = useDispatch()
  const {id}=useParams()
 
  const handleEditNum=(e)=>{
    e.preventDefault()
    dispatch(UpdatePhone(id,{phone}))
    
  }


const displayinfo = () => {
  toastInfo({
    
    description: "Vos informations ont été modifié avec succés",
    status: 'info',
    duration: 3000,
    isClosable: true,
  })
}
    
  
 
  const errors = useSelector(state=> state.errorReducer)

  const displayError = () =>      {
    errors.map(el=> toastError({
        description: `${el.msg}`,
        status: 'error',
        duration: 1500,
        isClosable: true,
      }))}


    return (
      <Stack spacing={1}>
        <FormControl mt={3}>
        <FormLabel>Ancien Numéro</FormLabel>
        <InputGroup id="divnum">
                    <InputLeftAddon children='+216'/> 
        <Input type='tel' ref={firstFieldRef} isDisabled defaultValue={user.phone}/>
        </InputGroup>
        </FormControl>
        
        <FormControl mt={4}>
        <FormLabel>Nouveau Numéro</FormLabel>
        <InputGroup id="divnum">
                    <InputLeftAddon children={'+216'}/> 
                    
        <Input label='Nouveau Numéro' onChange={(e)=>setPhone(e.target.value)} type='tel' maxLength="8" placeholder='Entrez un numéro valide'  />
        </InputGroup>
        </FormControl>
        <ButtonGroup d='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Annuler
          </Button>
          <Button colorScheme='teal' onClick={(e)=>{handleEditNum(e);displayError()}} isDisabled={ phone === '' ? true : false}>
            Enregistrer
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }
 
export default PopformNum