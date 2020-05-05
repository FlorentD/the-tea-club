import React, { useState } from "react";
import { Formik } from "formik";
import {
  Box,
  Typography,
  Grid,
  Hidden,
  Fade,
  Container,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Text from "./components/form/Text";
import TextArea from "./components/form/TextArea";
import Submit from "./components/form/Submit";
import Postal from "./svg/Postal";
import Letter from "./svg/Letter";

const Contact = () => {
  const [messageSent, sendMessage] = useState(false);
  const { t } = useTranslation();
  return (
    <Container>
      <Box mt={5} style={{ position: "relative" }}>
        <Box mb={5}>
          <Typography variant="h2" align="center">
            {t("contact.title")}
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Hidden mdDown>
              <Box m={16} mt={0}>
                <Postal />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={6}>
            <Formik
              initialValues={{ email: "", message: "" }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email(`L'email semble invalide`)
                  .required(`L'email est requis`),
                message: Yup.string().required(
                  "N'oubliez pas de sélectionner un panier"
                ),
              })}
              onSubmit={() => {
                sendMessage(true);
              }}
            >
              {() => {
                return (
                  <>
                    <Text
                      name="email"
                      type="email"
                      required
                      placeholder={t("form.email")}
                    />
                    <TextArea
                      name="message"
                      placeholder={t("form.message")}
                      required
                    />
                    {messageSent ? (
                      <Fade in={true} timeout={1500}>
                        <Box ml={1} display="flex" alignItems="center">
                          <Box mr={1}>
                            <Letter height={36} />{" "}
                          </Box>
                          <Typography variant="h6">
                            Message envoyé !{" "}
                          </Typography>
                        </Box>
                      </Fade>
                    ) : (
                      <Submit>{t("form.submit")}</Submit>
                    )}
                  </>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
