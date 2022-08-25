import {Box, Button, Input, NumberInput, NumberInputField, Text} from "@chakra-ui/react";
import {Sidebar} from "../components/sidebar/sidebar";
import {useFormik} from "formik";
import {DataStore} from "aws-amplify";
import {Product, Table} from "../../../models";
import {toast} from "react-toastify";
import * as Yup from "yup";

export const CreateTable = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            isActive: false,
        },
        onSubmit: async(values) => {
            await DataStore.save(new Table({
                name: values.name,
                isActive: false,
            })).then(() => {
                toast.success('Mesa criada com sucesso')
            }).catch(() => {
                toast.error('Erro ao criar produto')
            })
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Mínimo 3 caracteres')
                .required('Obrigatório'),
        }),
    })

    return (
        <Box display={'flex'}>
            <Sidebar />

            <Box p={4} w={'100%'}>


                <Text fontSize={25} mb={2}>Criar Mesa</Text>
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

                    <Button type={'submit'} colorScheme={'green'}> Salvar</Button>
                </Box>
            </Box>
        </Box>
    )
}