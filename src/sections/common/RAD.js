import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Snackbar, Alert, Typography, Grid } from "@mui/material";
import { FormProvider, RHFTextField } from "../../components/hook-form";
import CustomButton from "../../components/CustomButton";

const RAD = ({ title }) => {
    const [isSnackbarOpen, setSnackbarOpen] = useState(false);

    const schema = Yup.object().shape({
        firstname: Yup.string().max(120, "Firstname should not exceed 120 characters").required("Firstname is required"),
        lastname: Yup.string().max(120, "Lastname should not exceed 120 characters").required("Lastname is required"),
        gender: Yup.string().max(120, "Gender should not exceed 120 characters").required("Gender is required"),
        dateofbirth: Yup.string().max(120, "Date of birth should not exceed 120 characters").required("Date of birth is required"),
        email: Yup.string().email("Invalid Email Address... Try again.").required("Email address is required"),
        address: Yup.string().max(120, "Address should not exceed 120 characters"),
        position: Yup.string().max(120, "Position should not exceed 120 characters"),
        additional: Yup.string().max(500, "Additional info should not exceed 120 characters"),
    });

    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const { handleSubmit, watch, clearErrors } = methods;


    const onSubmit = async (data) => { };


    const handleSnackbarClose = (event, reason) => {
        methods.reset();
        setSnackbarOpen(false);
    };

    const handleRequestAccess = () => {
        const emailFieldValue = watchEmail;
        clearErrors("email");
        const isValidEmail = schema.fields.email.isValidSync(emailFieldValue);
        if (emailFieldValue && isValidEmail) {
            setSnackbarOpen(true);
        }
    };




    const watchEmail = watch('email', '');



    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid pt={1} px={3} container spacing={2}>
                    <Grid item xs={9} md={5}>
                        <RHFTextField id="email-input" name="email" label="Email*" defaultValue="" fullWidth value={watchEmail} />
                    </Grid>
                    <Grid item xs={9} md={4}>
                        <CustomButton sx={{ height: "55px" }} title={title} onPressed={handleRequestAccess} />
                    </Grid>
                </Grid>
            </FormProvider>

            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={isSnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert severity="success">
                    <Typography variant="h6">We will notify you soon...</Typography>
                </Alert>
            </Snackbar>
        </>
    );
};

export default RAD;
