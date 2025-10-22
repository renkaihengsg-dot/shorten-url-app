import * as yup from 'yup'

const shortenSchema = yup.object().shape({
    url: yup.string().url('Invalid URL').required('URL is required')
})

export {
    shortenSchema
}