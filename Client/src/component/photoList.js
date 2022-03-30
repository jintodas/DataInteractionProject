
   
import { useEffect, useState } from "react";
import * as config from "../config";
import "./App.css";
const photList = ({ photo }) => (
  <li key={dog._id} className={"photo-list-item"}>
    <Link className="photo-list-item__link" to={`/photoGallery/${photo._id}`}>
      <img className="dog-list-item__logo" src={photo.url} />
      <span className="dog-list-item__title">{photo.title}</span>
    </Link>
  </li>
);

export const photoListItem = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/photos`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setDogs(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ul className="photo-list">
      {photo.map((photo) => (
        <DogListItem key={photo._id} photo={photo} />
      ))}
    </ul>
  );
};