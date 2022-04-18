import React from "react";
import { MDBDataTable, MDBBtn, MDBInput } from "mdbreact";
// import './App.css';

class TableEditablePage extends React.Component {
  state = {
    columns: [
      {
        field: 'title',
        label: 'Title'
      },
      {
        field: 'year',
        label: 'Year'
      },
      {
        field: 'genre',
        label: 'Genre'
      },
      {
        field: 'delete',
        label: 'Delete'
      }
    ],
    rows: [],
    input: ''
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    fetch("https://man-movies-api.herokuapp.com/movies", {
      method: "GET",
    })
      .then(res => res.json())
      .then(json => {
        let rows = [];
        json.movies.forEach(item => rows.push({
          id: item._id,
          title: item.title,
          year: item.year,
          genre: item.genre,
          delete: <MDBBtn onClick={() => this.deleteMovie(item._id)}>X</MDBBtn>
        }));

        this.setState({ rows });
      })
      .catch(err => console.error(err));
  }

  addMovie = () => {
    fetch("https://man-movies-api.herokuapp.com/movies", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.input
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) this.getMovies();
      })
      .catch(err => console.error(err));
  }

  updateInput = (value) => this.setState({ input: value });

  deleteMovie = (id) => {
    fetch(`https://man-movies-api.herokuapp.com/movies/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) this.getMovies();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <MDBDataTable
          striped
          bordered
          hover
          data={{ columns: this.state.columns, rows: this.state.rows }}
        />

        <MDBInput value={this.state.input} getValue={this.updateInput} label="Insert movie title" />
        <MDBBtn onClick={this.addMovie} disabled={!this.state.input.length}>Add item</MDBBtn>
      </>
    );
  }
};

export default TableEditablePage;