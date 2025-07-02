'use client'

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import participantsData from "../../lib/participants.json"; // Adjust path as needed

const stateNames = {
  "01": "Alabama",
  "02": "Alaska",
  "04": "Arizona",
  "05": "Arkansas",
  "06": "California",
  "08": "Colorado",
  "09": "Connecticut",
  "10": "Delaware",
  "11": "District of Columbia",
  "12": "Florida",
  "13": "Georgia",
  "15": "Hawaii",
  "16": "Idaho",
  "17": "Illinois",
  "18": "Indiana",
  "19": "Iowa",
  "20": "Kansas",
  "21": "Kentucky",
  "22": "Louisiana",
  "23": "Maine",
  "24": "Maryland",
  "25": "Massachusetts",
  "26": "Michigan",
  "27": "Minnesota",
  "28": "Mississippi",
  "29": "Missouri",
  "30": "Montana",
  "31": "Nebraska",
  "32": "Nevada",
  "33": "New Hampshire",
  "34": "New Jersey",
  "35": "New Mexico",
  "36": "New York",
  "37": "North Carolina",
  "38": "North Dakota",
  "39": "Ohio",
  "40": "Oklahoma",
  "41": "Oregon",
  "42": "Pennsylvania",
  "44": "Rhode Island",
  "45": "South Carolina",
  "46": "South Dakota",
  "47": "Tennessee",
  "48": "Texas",
  "49": "Utah",
  "50": "Vermont",
  "51": "Virginia",
  "53": "Washington",
  "54": "West Virginia",
  "55": "Wisconsin",
  "56": "Wyoming",
};

function ordinalSuffix(i) {
  const j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) return i + "st";
  if (j === 2 && k !== 12) return i + "nd";
  if (j === 3 && k !== 13) return i + "rd";
  return i + "th";
}

function getColor(weightNormalized) {
  if (weightNormalized === undefined) return "#ccc";
  const lightBlue = [204, 229, 255];
  const darkBlue = [0, 51, 153];
  const r = Math.round(lightBlue[0] + (darkBlue[0] - lightBlue[0]) * weightNormalized);
  const g = Math.round(lightBlue[1] + (darkBlue[1] - lightBlue[1]) * weightNormalized);
  const b = Math.round(lightBlue[2] + (darkBlue[2] - lightBlue[2]) * weightNormalized);
  return `rgb(${r},${g},${b})`;
}

export default function CongressionalMap() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch(console.error);
  }, []);

  // Get max participants count for normalization
  const maxParticipants = Math.max(...Object.values(participantsData));

  const onEachFeature = (feature, layer) => {
    const stateFP = feature.properties.STATEFP;
    const districtNum = Number(feature.properties.CD118FP);
    const stateName = stateNames[stateFP] || "Unknown State";
    const districtStr = ordinalSuffix(districtNum);

    const districtKey = `${stateFP}${districtNum < 10 ? "0" + districtNum : districtNum}`;

    const participants = participantsData[districtKey];

    const tooltipText =
      participants !== undefined
        ? `${stateName} ${districtStr} — Participants: ${participants}`
        : `${stateName} ${districtStr} — No Participants`;

    layer.bindTooltip(tooltipText, { sticky: true });
  };

  const style = (feature) => {
    const stateFP = feature.properties.STATEFP;
    const districtNum = Number(feature.properties.CD118FP);
    const districtKey = `${stateFP}${districtNum < 10 ? "0" + districtNum : districtNum}`;
    const participants = participantsData[districtKey];

    const normalizedWeight =
      participants !== undefined && maxParticipants > 0 ? participants / maxParticipants : 0;

    return {
      fillColor: getColor(normalizedWeight),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  return (
    <MapContainer center={[37.8, -96]} zoom={4} style={{ height: "70vh", width: "100%" }}>
     {/* <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      {geoData && <GeoJSON data={geoData} style={style} onEachFeature={onEachFeature} />}
    </MapContainer>
  );
}
