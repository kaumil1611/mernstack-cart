import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  useEffect(() => {
    homePage();
  }, []);

  const homePage = async () => {
    axios
      .get("/home", {
        headers: headers,
        withCredentials: true,
      })
      .then((res) => {
        if (!res.status === 200) {
          const error = new Error(res.error);

          throw error;
        }
        const data = JSON.parse(JSON.stringify(res.data));
        setUserData({
          name: data?.name,
          email: data?.email,
          phone: data?.phone,
        });
      })
      .catch((err) => {
        console.log(err, "err");
        navigate("/login");
      });
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/yW4BPHNX/alexander-shatov-s-IFCJHr-UWPM-unsplash.jpg"
        />
        <Card.Body>
          <h1>
            <Card.Title>Card Title</Card.Title>
          </h1>
          <h2>
            {" "}
            <Card.Text>{userData?.name}</Card.Text>
          </h2>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{userData?.email}</ListGroup.Item>
          <ListGroup.Item>{userData?.phone}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Home;
