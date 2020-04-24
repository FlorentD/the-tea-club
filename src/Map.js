import React, { useEffect } from "react";
import OlMap from "ol/Map";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { Typography, Box, styled } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const MapBox = styled(Box)({ width: "100%", height: 600 });
const Home = fromLonLat([-1.7572, 47.19815]);
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
