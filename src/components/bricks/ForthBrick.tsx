import { useCallback, useState } from "react";
import { Brick } from "../Brick";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import useAxios from "../../hooks/useAxios";
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer";

import purplePin from "../../assets/pin-purple.png";
import yellowPin from "../../assets/pin-yellow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "../Loading";

const styles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

const mapOptions = {
  // Add your map options here
  // `center` and `zoom` are required for every map to be displayed
  center: { lat: 32.715736, lng: -117.161087 },
  zoom: 3,
  styles,
  disableDefaultUI: true,
};

export const ForthBrick = () => {
  const {
    response: launchpads,
    error: launchpadsError,
    loading: launchpadsLoading,
  } = useAxios("/v4/launchpads");
  const {
    response: landpads,
    error: landpadsError,
    loading: landpadsLoading,
  } = useAxios("/v4/landpads");

  const [mapContainer, setMapContainer] = useState();
  const onLoad = useCallback(
    (map) => addMarkers(map, launchpads, landpads),
    [launchpads, landpads]
  );

  return (
    <Brick md={8} mb={1} style={{ flex: "2", height: "300px" }}>
      <div className="box p-2 h-100">
        <div className="box-title">Zones de décollage et d'atterissage</div>
        <div className="box-body p-2 h-100 d-flex gap-2">
          {launchpads && landpads ? (
            <>
              <div className="box h-100 p-2 col-2">
                <div className="box-title">Légende</div>
                <div className="box-body p-2">
                  <div className="d-flex gap-2 align-items-center mb-2">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="text-warning"
                    />
                    <small className="wrap">
                      Décollage [{launchpads && launchpads.length}]
                    </small>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="text-purple"
                    />
                    <small className="wrap">
                      Atterissage [{landpads && landpads.length}]
                    </small>
                  </div>
                </div>
              </div>
              <div className="box col-10 p-2">
                <GoogleMapsProvider
                  googleMapsAPIKey="AIzaSyD3fBQWhzYo-W5j0h4Rob5lihe2WECC_CA"
                  mapContainer={mapContainer}
                  mapOptions={mapOptions}
                  onLoadMap={onLoad}
                >
                  <div
                    ref={(node) => setMapContainer(node)}
                    style={{ height: "100%", width: "100%" }}
                  ></div>
                </GoogleMapsProvider>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Brick>
  );
};

function addMarkers(map, launchpads, landpads) {
  if (launchpads && landpads) {
    const infoWindow = new google.maps.InfoWindow();

    let markers = [];
    launchpads.forEach((launchpad) => {
      const lat = launchpad.latitude;
      const lng = launchpad.longitude;
      const marker = new google.maps.Marker({
        map,
        position: { lat, lng },
        icon: yellowPin,
      });

      marker.addListener("click", () => {
        infoWindow.setPosition({ lat, lng });
        infoWindow.setContent(`
          <div class="info-window p-2 text-center d-flex flex-column">
            <p class="fw-bold text-dark">${launchpad.full_name}</p>
            <small class="text-dark">${launchpad.locality}, ${launchpad.region} </small>
            <span class="badge bg-warning mx-auto mt-1">Zone de décollage</span>
          </div>
        `);
        infoWindow.open({ map });
      });

      markers.push(marker);
    });

    landpads.forEach((landpad) => {
      const lat = landpad.latitude;
      const lng = landpad.longitude;
      const marker = new google.maps.Marker({
        map,
        position: { lat, lng },
        icon: purplePin,
      });

      marker.addListener("click", () => {
        infoWindow.setPosition({ lat, lng });
        infoWindow.setContent(`
          <div class="info-window p-2 text-center d-flex flex-column">
            <p class="fw-bold text-dark">${landpad.full_name}</p>
            <small class="text-dark">${landpad.locality}, ${landpad.region} </small>
            <span class="badge bg-purple mx-auto mt-1">Zone d'atterissage</span>
          </div>
        `);
        infoWindow.open({ map });
      });

      markers.push(marker);
    });
  }
}
