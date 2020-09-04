import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import Text from "./components/form/Text";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  makeStyles,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@material-ui/core";
import * as Yup from "yup";
import TextArea from "./components/form/TextArea";
import ThankYou from "./svg/ThankYou";
import Submit from "./components/form/Submit";

const useStyle = makeStyles((theme) => ({
  buttonWrapper: {
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: { flexDirection: "row", height: 70 },
  },
  button: {
    display: "flex",
    padding: 20,
    width: "100%",
    fontWeight: "bold",
    fontSize: 20,
  },
}));

const SignDialog = ({ children, type, ButtonElement, complete = false }) => {
  const style = useStyle();
  const [open, setOpen] = useState(false);
  const [messageSent, sendMessage] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        disabled={complete}
        className={style.button}
        onClick={() => setOpen(true)}
      >
        {complete ? "Complet !" : <ButtonElement />}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth="md"
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("Le prénom est requis"),
            lastName: Yup.string().required("Le nom est requis"),
            email: Yup.string()
              .email(`L'email semble invalide`)
              .required(`L'email est requis`),
          })}
          onSubmit={async (values) => {
            try {
              await (
                await fetch("/sign", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ...values,
                    type,
                  }),
                })
              ).json();
            } catch (e) {
              console.error(e);
            } finally {
              sendMessage(true);
            }
          }}
        >
          {() => {
            return (
              <>
                <DialogTitle>Formulaire d'inscription</DialogTitle>
                <DialogContent>
                  {messageSent && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <ThankYou width={240} />
                      <Typography>
                        Votre inscription a bien été envoyée, je vous
                        recontacterai très rapidement ! Merci !
                      </Typography>
                    </Box>
                  )}
                  {!messageSent && (
                    <>
                      <DialogContentText>{children}</DialogContentText>
                      <Text name="firstName" placeholder="Prénom" />
                      <Text name="lastName" placeholder="Nom" />
                      <Text name="email" placeholder="E-mail" type="email" />
                      <Text
                        name="phone"
                        placeholder="Numéro de téléphone"
                        type="phone"
                      />
                      <TextArea name="details" placeholder="Remarques" />
                    </>
                  )}
                </DialogContent>
                <DialogActions>
                  {messageSent && (
                    <Button variant="contained" onClick={() => setOpen(false)}>
                      Fermer
                    </Button>
                  )}
                  {!messageSent && (
                    <Box display="flex" className={style.buttonWrapper}>
                      <Box m={1}>
                        <Button
                          variant="contained"
                          onClick={() => setOpen(false)}
                          fullWidth
                        >
                          Annuler
                        </Button>
                      </Box>
                      <Submit m={1}>Soumettre mon inscription</Submit>
                    </Box>
                  )}
                </DialogActions>
              </>
            );
          }}
        </Formik>
      </Dialog>
    </>
  );
};

SignDialog.propTyes = {
  ButtonElement: PropTypes.element,
};

SignDialog.defaultProps = {
  ButtonElement: () => <span>S'inscrire</span>,
};

export default SignDialog;
