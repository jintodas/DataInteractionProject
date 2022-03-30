import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../config";
import "../App.css"

export const Photo= () => {
  const params = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/photoGallery/${params.id}`, {
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          throw Error(res.status);
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setPhoto(json);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [params.id]);

  if (!photo && !error) {
    return (
      <div className="Photo">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="Photo">
        <p className="error">Got error status: {error}</p>
      </div>
    );
  }

  return (
    <div className="photo">
      <h2 className="photo__header">{photo.title}</h2>
      <img className="photo__image" src={photo.url} />
      <div className="photo__info"></div>
    </div>
  );
};