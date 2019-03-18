import React from "react";
import axios from "axios";
import { Card, Image, Badge } from "react-bootstrap";

class Missions extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v3/launchpads")
      .then(res => {
        //console.log(res.data);
        return res.data;
      })
      .then(res => {
        this.setState({ data: res });
      });
  }

  render() {
    //console.log(this.state.data);

    if (!this.state.data.length) {
      return <div>Data is Loading</div>;
    } else {
      return (
        <div>
          {this.state.data.map(data => {
            let img;
            if (data.status === "active") {
              img = (
                <Badge pill variant="success">
                  Active
                </Badge>
              );
            } else {
              img = (
                <Badge pill variant="danger">
                  Inactive
                </Badge>
              );
            }
            return (
              <Card key={data.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>location :{data.location.name}</Card.Title>
                  {img}
                  <Card.Text>{data.details}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      );
    }
  }
}

export default Missions;
