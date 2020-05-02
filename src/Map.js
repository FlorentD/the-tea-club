import React, { useEffect } from "react";
import OlMap from "ol/Map";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import View from "ol/View";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import Vector from "ol/layer/Vector";
import { Typography, Box, styled } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const MapBox = styled(Box)({ width: "100%", height: 500 });
const Home = fromLonLat([-1.7572, 47.19815]);
const feature = new Feature({
  geometry: new Point(Home),
  name: "The Tea Club",
});
const iconStyle = new Style({
  image: new Icon({
    anchorXUnits: "fraction",
    anchorYUnits: "pixels",
    src: "/static/house.png",
  }),
});

feature.setStyle(iconStyle);

const vectorSource = new VectorSource({
  features: [feature],
});

const Map = () => {
  useEffect(() => {
    new OlMap({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
        new Vector({
          source: vectorSource,
        }),
      ],
      view: new View({
        center: Home,
        zoom: 17,
      }),
    });
  }, []);
  const { t } = useTranslation();
  return (
    <Box mt={5}>
      <Typography variant="h2" align="center">
        {t("map.title")}
      </Typography>
      <MapBox id="map"></MapBox>
    </Box>
  );
};

export default Map;
