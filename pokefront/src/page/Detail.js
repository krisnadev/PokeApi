import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { detailId } = useParams();
  const [gambar, setGambar] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = () => {
    localStorage.setItem('Name', name);
    setName(c => c + 1);
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        await axios
          .get(`http://localhost:8000/detail/${detailId}`)
          .then((response) => {
            setLoading(false);
            setGambar(response.data.sprites.other.dream_world.front_default);
            setName(response.data.name);
            setWeight(response.data.weight);
            setHeight(response.data.height);
            // console.log(response);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDetail();
  }, [detailId]);

  return (
    <div className="container">
      <h5>Detail Pokemon</h5>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <img
              src={gambar}
              alt={`detail`}
              className="my-2 bg-danger p-2"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                name :<h4>{name}</h4>
              </li>
              <li className="list-group-item">
                weight :<h4>{weight}</h4>
              </li>
              <li className="list-group-item">
                height :<h4>{height}</h4>
              </li>
              <li className="list-group-item">
              <input type="text" className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
                <button className="btn btn-primary" onClick={handle}>Catch</button>
              </li>
              
         
            </ul>
          </div>
          <div className="col-md-12">
          <h5> My Pokemon List</h5>
          {localStorage.getItem('Name') && (
                <div>
                Name: <p>{localStorage.getItem('Name')}</p>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
