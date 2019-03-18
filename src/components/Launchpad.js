import React from "react";
import axios from "axios";
import { Card, Image, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Launchpad extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then(res => {
        //console.log(res.data);
        return res.data;
      })
      .then(res => {
        this.setState({ data: res });
      });
  }

  render() {
    console.log(this.state.data);

    if (!this.state.data.length) {
      return <div>Data is Loading</div>;
    } else {
      return (
        <div>
          {this.state.data.map(data => {
            let payloadarr = data.payload_ids.map(plid => {
              return <span>{plid}</span>;
            });
            //let payloadlink = `/payload/${data.payload_ids[0]}`;
            return (
              <Card key={data.mission_id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Mission Name :{data.mission_name}</Card.Title>
                  <Card.Text>Payload Id's: {payloadarr}</Card.Text>

                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      );
    }
  }
}

export default Launchpad;
