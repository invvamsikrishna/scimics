import React from "react";

import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogTitle, DialogActions, Grid, Button, Snackbar, Alert, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "../../components/hook-form";
import CustomButton from "../../components/CustomButton";

const RequestAccessDialog = ({ title }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [alert, showAlert] = useState({ open: false });

  useEffect(() => {
    if (isDialogOpen) {
      reset(defaultValues);
    }
  }, [isDialogOpen]);

  const schema = Yup.object().shape({
    firstname: Yup.string().max(120, "Firstname should not exceed 120 characters").required("Firstname is required"),
    lastname: Yup.string().max(120, "Lastname should not exceed 120 characters").required("Lastname is required"),
    gender: Yup.string().max(120, "Gender should not exceed 120 characters").required("Gender is required"),
    dateofbirth: Yup.string().max(120, "Date of birth should not exceed 120 characters").required("Date of birth is required"),
    email: Yup.string().email().required("Email address is required"),
    address: Yup.string().max(120, "Address should not exceed 120 characters"),
    position: Yup.string().max(120, "Position should not exceed 120 characters"),
    additional: Yup.string().max(500, "Additional info should not exceed 120 characters"),
  });

  const defaultValues = {
    firstname: "",
    lastname: "",
    gender: "",
    dateofbirth: "",
    phone: "",
    email: "",
    address: "",
    position: "",
    additional: "",
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data) => { };

  const handleCancel = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <CustomButton title={title} onPressed={() => setDialogOpen(true)} />

      <Dialog open={isDialogOpen} maxWidth="xs" fullWidth onClose={handleCancel}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Request Early Access</DialogTitle>

          <Grid pt={1} px={3} container spacing={2}>
            <Grid item xs={12} md={6}>
              <RHFTextField name="firstname" label="First name*" fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFTextField name="lastname" label="Last name*" fullWidth />
            </Grid>

            <Grid item xs={12} md={12}>
              <RHFTextField name="email" label="Email*" fullWidth />
            </Grid>
          </Grid>

          <DialogActions sx={{ p: 3 }}>
            <CustomButton type="submit" loading={isLoading} title="Submit" sx={{ width: "100%" }}>
              Submit
            </CustomButton>
          </DialogActions>
        </FormProvider>
      </Dialog>

      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={alert.open} autoHideDuration={3000} onClose={() => showAlert({ open: false })}>
        <Alert severity={alert.color}>
          <Typography variant="h6">{alert.text}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
};

export default RequestAccessDialog;
