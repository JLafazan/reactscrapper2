import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Saves extends Component {
  state = {
    saves: [],
    title: "",
    date: "",
    story: "",
    url: "",
    image: "",
    comments: ""

  };

  componentDidMount() {
    this.loadSaves();
  }

  loadSaves = () => {
    API.getSaves()
      .then(res =>
        this.setState({ saves: res.data, title: "", date: "", story: "", url: "", image: "", comments: "" })
      )
      .catch(err => console.log(err));
  };

  deleteSave = id => {
    API.deleteSave(id)
      .then(res => this.loadSaves())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.date) {
      API.saveSave({
        title: this.state.title,
        date: this.state.date,
        story: this.state.story,
        link: this.state.url,
        image: this.state.image,
        comments: this.state.comments

      })
        .then(res => this.loadSaves())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>(ReactJS) New York Times Article</h1>
              <h1>Search for and Save Articles of Interest</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="start"
                placeholder="Start Year (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="stop"
                placeholder="Stop Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit News Story Request
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saves On My List</h1>
            </Jumbotron>
            {this.state.saves.length ? (
              <List>
                {this.state.saves.map(save => (
                  <ListItem key={save._id}>
                    <Link to={"/saved/" + save._id}>
                      <strong>
                        {save.title} by {save.story}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteSave(save._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saves;
