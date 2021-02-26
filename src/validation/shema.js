import * as yup from 'yup'

const formSchema = yup.object().shape({
        name: yup.string().required('Your name is required').min(2, 'Your name is longer than 2 letters, yeah?'),
        size: yup.string(),
        pepperoni: yup.boolean(),
        bacon: yup.boolean(),
        cheese: yup.boolean(),
        sausage: yup.boolean(),
        special: yup.string()
})
export default formSchema