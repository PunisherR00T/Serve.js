import { useToast } from '@chakra-ui/react'
import {useSelector} from 'react-redux'
const Errors = () => {
    const errors = useSelector(state=> state.errorReducer)
    const toast = useToast()

    return (

        <div>
                {
                    errors.map(el=> toast({
                        description: `${el.msg}`,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      }))
                }
        </div>
    )
}

export default Errors