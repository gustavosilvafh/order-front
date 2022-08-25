import {
    Box, Button,
    Input,
    NumberInput,
    NumberInputField,
    Text
} from "@chakra-ui/react";
import { useFormik} from "formik";
import {DataStore} from "aws-amplify";
import * as Yup from 'yup';
import {Product} from "../../../models";
import {toast} from "react-toastify";
import {Sidebar} from "../components/sidebar/sidebar";

export const CreateProduct = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            value: '',
            image: '',
            orders: []
        },
        onSubmit: async(values) => {
            await DataStore.save(new Product({
                name: values.name,
                image: values.image,
                value: Number(values.value)
            })).then((value) => {
                toast.success('Produto criado com sucesso')
            }).catch(() => {
                toast.error('Erro ao criar produto')
            })
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Mínimo 3 caracteres')
                .required('Obrigatório'),
            value: Yup.number().min(0.1, 'Valor minimo 0.10').required("Obrigatório"),
            image: Yup.string().url('Precisa ser uma url válida').required('Obrigatório')
        }),
    })

    return (
        <Box display={'flex'}>
            <Sidebar />
        <Box p={4} w={'100%'}>


            <Text fontSize={25} mb={2}>Criar produto</Text>
            <Box as={'form'} gap={2} display={'flex'} flexDirection={'column'} onSubmit={formik.handleSubmit}>
                <Input
                    name={'name'}
                    id={'name'}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder={'Nome'}
                    {...formik.getFieldProps('name')}
                    isInvalid={formik.errors.name}
                    errorBorderColor='crimson'
                />
                {formik.errors.name && (
                    <Text color={'crimson'}>{formik.errors.name}</Text>
                )}
                <NumberInput
                    name={'value'}
                    id={'value'}
                    onChange={(value) => {
                        formik.setFieldValue('value', value)
                    }}
                    isInvalid={formik.errors.value}
                >
                    <NumberInputField placeholder={'Valor'} />
                </NumberInput>
                {formik.errors.value && (
                    <Text color={'crimson'}>{formik.errors.value}</Text>
                )}
                <Input
                    type={"url"}
                    name={'image'}
                    id={'image'}
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    placeholder={'Url da imagem'}
                    isInvalid={formik.errors.image}
                    errorBorderColor='crimson'
                />
                {formik.errors.image && (
                    <Text color={'crimson'}>{formik.errors.image}</Text>
                )}
                <Button type={'submit'} colorScheme={'green'}> Salvar</Button>
            </Box>
        </Box>
        </Box>
    )
}