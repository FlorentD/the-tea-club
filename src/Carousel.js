import React, { useState } from "react";
import { Formik } from "formik";
import SwiperCore, { Navigation, Pagination, Keyboard, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import Text from "./components/form/Text";
import TextArea from "./components/form/TextArea";
import Submit from "./components/form/Submit";
import * as Yup from "yup";
import ThankYou from "./svg/ThankYou";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
  },
  image: {
    width: "220px",
    height: "220px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      width: "600px",
      height: "600px",
    },
  },
}));

SwiperCore.use([Navigation, Pagination, Keyboard, A11y]);

const CarouselDialog = ({
  src,
  alt,
  title,
  Description,
  Details,
  Price = () => null,
}) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [messageSent, sendMessage] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle>{title}</DialogTitle>
        <Grid container>
          <Grid item xs={12} md={7}>
            {messageSent && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                m={2}
              >
                <ThankYou width={240} />
                <Typography>
                  Votre inscription a bien été envoyée, je vous recontacterai
                  très rapidement ! Merci !
                </Typography>
              </Box>
            )}
            {!messageSent && (
              <>
                <DialogContent>
                  <Description />
                </DialogContent>
                <DialogContent>
                  <Details />
                </DialogContent>
                <DialogContent>
                  <Price />
                </DialogContent>
              </>
            )}
          </Grid>
          <Grid item xs={12} md={5}>
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
                        type: title,
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
              {({ values }) => {
                return (
                  <>
                    <Text name="firstName" placeholder="Prénom" />
                    <Text name="lastName" placeholder="Nom" />
                    <Text name="email" placeholder="E-mail" type="email" />
                    <Text
                      name="phone"
                      placeholder="Numéro de téléphone"
                      type="phone"
                    />
                    <TextArea name="details" placeholder="Remarques" />
                    <DialogActions>
                      {messageSent && (
                        <Button
                          variant="contained"
                          onClick={() => setOpen(false)}
                        >
                          Fermer
                        </Button>
                      )}
                      {!messageSent && (
                        <Box display="flex">
                          <Submit m={1}>Soumettre mon inscription</Submit>
                        </Box>
                      )}
                    </DialogActions>
                  </>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

const Carousel = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={100}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop
        centeredSlides
        keyboard
        a11y
      >
        <SwiperSlide>
          <CarouselDialog
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/stage_3.jpg"
            alt="coupon pour un stage de 3 jours, valable un an"
            title="Stage 3 jours : ( de  4 à 11 ans)"
            Description={() => {
              return (
                <DialogContentText>
                  Durant trois matinées ou après-midis,sur le thème du moment,
                  votre enfant pourra jouer, découvrir la nature, chanter et
                  créer tout en anglais. Au Pellerin, durant les vacances
                  scolaires, 6 enfants maximum par groupe.
                </DialogContentText>
              );
            }}
            Details={() => {
              return (
                <DialogContentText>
                  <strong>
                    Inscription pour le stage 3 demi-journées (75€).
                  </strong>
                  <div>
                    Merci d'indiquer le prénom, l’âge, le nombre d'enfants et
                    les dates sur lesquelles vous souhaitez les inscrire dans la
                    partie "remarques".
                  </div>
                  <div>
                    Je vous recontacterai rapidement après l'envoi du formulaire
                    pour faire connaissance et valider votre inscription !
                  </div>
                </DialogContentText>
              );
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselDialog
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/stage_5.jpg"
            alt="coupon pour un stage de 5 jours, valable un an"
            title="Stage 5 jours : ( de 4 à 11 ans )"
            Description={() => {
              return (
                <DialogContentText>
                  Durant cinq matinées ou après-midis,sur le thème du moment,
                  votre enfant pourra jouer, découvrir la nature, chanter et
                  créer tout en anglais. Au Pellerin, durant les vacances
                  scolaires, 6 enfants maximum par groupe.
                </DialogContentText>
              );
            }}
            Details={() => {
              return (
                <DialogContentText>
                  <strong>
                    Inscription pour le stage 5 demi-journées (150€).
                  </strong>
                  <div>
                    Merci d'indiquer le prénom, l’âge, le nombre d'enfants et
                    les dates sur lesquelles vous souhaitez les inscrire dans la
                    partie "remarques".
                  </div>
                  <div>
                    Je vous recontacterai rapidement après l'envoi du formulaire
                    pour faire connaissance et valider votre inscription !
                  </div>
                </DialogContentText>
              );
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselDialog
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/at_home.jpg"
            alt="coupon pour un cours à la maison, valable un an"
            title="Atelier “at home” : (de 2 à 11 ans)"
            Description={() => {
              return (
                <DialogContentText>
                  Offrez à votre enfant un moment privilégié à votre domicile,
                  un tête à tête en anglais pour créer une activité manuelle sur
                  le thème du moment, chanter en anglais, et échanger tout
                  simplement selon ses envies langagières du jour.
                </DialogContentText>
              );
            }}
            Details={() => {
              return (
                <DialogContentText>
                  <strong>Inscription pour un atelier “at home”</strong>
                  <div>
                    Merci d'indiquer le prénom, l'âge et les dates et horaires
                    sur lesquels vous souhaitez inscrire votre enfant.
                  </div>
                  <div>
                    Je vous recontacterai rapidement après l'envoi du formulaire
                    pour faire connaissance et vous donner les détails de
                    l’atelier.
                  </div>
                </DialogContentText>
              );
            }}
            Price={() => {
              return (
                <DialogContentText>
                  tarif atelier 1h : 20 euros
                </DialogContentText>
              );
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselDialog
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/online.jpg"
            alt="coupon pour un cours en ligne, valable un an"
            title="Atelier “craft online” : (de 5 à 11 ans)"
            Description={() => {
              return (
                <DialogContentText>
                  Atelier interactif (avec le logiciel Zoom)
                  <br />
                  1h d’atelier d'arts plastiques, jeux et chansons en anglais
                  autour d’un thème défini.
                  <ul>
                    <li>
                      Des activités manuelles réalisables avec du matériel
                      simple facile à trouver à la maison.
                    </li>
                    <li>
                      On ne parle qu’en anglais, les images, les mimes, des
                      codes nous permettent de nous comprendre et de s’exprimer
                      sans traduire.
                    </li>
                    <li>
                      On découvre du vocabulaire et des expressions anglaises à
                      travers des activités dynamiques sur des thèmes du
                      quotidien, les fêtes du calendrier, l’univers des enfants,
                      leurs passions.
                    </li>
                  </ul>
                  On écoute, on parle et surtout on s’amuse toujours en anglais
                  !
                </DialogContentText>
              );
            }}
            Details={() => {
              return (
                <DialogContentText>
                  <strong>Inscription pour un atelier Craft on line</strong>
                  <div>
                    Merci d'indiquer le(s) prénom(s), l'(les)âge(s), le nombre
                    d'enfants et la date/horaire sur lesquels vous souhaitez les
                    inscrire.
                  </div>
                  <div>
                    Je vous recontacterai rapidement après l'envoi du formulaire
                    pour faire connaissance et vous donner les détails de
                    l’atelier.
                  </div>
                </DialogContentText>
              );
            }}
            Price={() => {
              return (
                <DialogContentText>
                  <ul>
                    <li>tarif pour 1 enfant : 15 euros</li>
                    <li>pour 2 enfants : 10 euros par enfant</li>
                    <li>pour 3 enfants : 8 euros par enfants</li>
                    <li>pour 4 enfants : 6 euros par enfant</li>
                  </ul>
                </DialogContentText>
              );
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselDialog
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/gift_teens.jpg"
            alt="coupon pour le soutien d'un collégien"
            title="Soutien collège on line / at home : (11-15 ans)"
            Description={() => {
              return (
                <DialogContentText>
                  Pour les collégiens qui souhaitent progresser en anglais
                  <ul>
                    <li>
                      en reprenant les bonnes bases avec des supports adaptés et
                      ludiques
                    </li>
                    <li>
                      pour se sentir plus à l’aise à l’oral comme à l’écrit,
                    </li>
                    <li>
                      peu importe le niveau, grâce aux images, mimes et codes
                      définis ensemble, il est possible de s’exprimer en anglais
                      en gagnant chaque fois un peu plus confiance en ses
                      capacités.
                    </li>
                  </ul>
                  !
                </DialogContentText>
              );
            }}
            Details={() => {
              return (
                <DialogContentText>
                  <strong>Inscription pour un cours de soutien collège.</strong>
                  <div>
                    Merci d'indiquer le prénom, l’âge de votre enfant, ses
                    disponibilités et le cours souhaité, je vous recontacterai
                    rapidement !
                  </div>
                </DialogContentText>
              );
            }}
            Price={() => {
              return (
                <DialogContentText>
                  <ul>
                    <li>25 € /h cours individuel à domicile</li>
                    <li>20 € /h cours on line (sur zoom)</li>
                  </ul>
                </DialogContentText>
              );
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselDialog
            src="https://the-tea-club.s3.eu-west-3.amazonaws.com/gift_story.jpg"
            alt="coupon pour la lecture d'une histoire et des jeux amusants en anglais"
            title="Story time and funny games : (sur zoom ou à votre domicile ) de 3 à 8 ans"
            Description={() => {
              return (
                <DialogContentText>
                  Une douce session autour d’un conte de Noël avec de petits
                  jeux pour rebondir sur le vocabulaire découvert lors de la
                  lecture. Une séance de 45 minutes à votre domicile ou sur
                  zoom.
                </DialogContentText>
              );
            }}
            Details={() => {
              return (
                <DialogContentText>
                  <strong>
                    Inscription pour un atelier Story time and funny games :
                  </strong>
                  <div>
                    Merci d'indiquer le prénom, l'âge et les dates et horaires
                    sur lesquels vous souhaitez inscrire votre enfant.
                  </div>
                  <div>
                    Je vous recontacterai rapidement après l'envoi du formulaire
                    pour faire connaissance et vous donner les détails de
                    l’atelier.
                  </div>
                </DialogContentText>
              );
            }}
            Price={() => {
              return (
                <DialogContentText>
                  <ul>
                    <li>tarif atelier 1h : 20 euros en direct</li>
                    <li>
                      sur zoom, tarif à définir avec plusieurs participants
                      possibles
                    </li>
                  </ul>
                </DialogContentText>
              );
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
