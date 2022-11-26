import React, { Component } from "react";

import HomeResult from "./HomeResult";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      carPrice: "",
      price_category: "",
      cars: [
        {
          id: "898203c9-cd14-4bc9-ae26-519e69a3ffbc",
          name1: "bmw",
          description: "",
          carPrice: 20,
          rating: null,
          price_category: "low"
        },
        {
          id: "7df46655-10ac-48eb-8df4-c5d7eb51dc87",
          name1: "toyota",
          description: "",
          carPrice: 50,
          rating: null,
          price_category: "low"
        },
        {
          id: "7df46655-10ac-48eb-8df4-c5d7eb51dc88",
          name1: "benz",
          description: "",
          carPrice: 100,
          rating: null,
          price_category: "high"
        },
        {
          id: "7df46655-10ac-48eb-8df4-c5d7eb51dc89",
          name1: "odi",
          description: "",
          carPrice: 200,
          rating: null,
          price_category: "medium"
        },
        {
          id: "898203c9-cd14-4bc9-ae26-519e69a3ff00",
          name1: "hec",
          description: "",
          carPrice: 20,
          rating: null,
          price_category: "low"
        },
        {
          id: "7df46655-10ac-48eb-8df4-c5d7eb51dc02",
          name1: "maruti",
          description: "",
          carPrice: 50,
          rating: null,
          price_category: "medium"
        },
        {
          id: "7df46655-10ac-48eb-8df4-c5d7eb51dc03",
          name1: "hero",
          description: "",
          carPrice: 60,
          rating: null,
          price_category: "high"
        },
        {
          id: "7df46655-10ac-48eb-8df4-c5d7eb51dc04",
          name1: "tata",
          description: "",
          carPrice: 20,
          rating: null,
          price_category: "medium"
        }
      ],
      filtercars: []
    };
  }

  //state= { cars:[] };

  componentDidMount() {}

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };

  render() {
    let filtercars = this.state.cars;
    filtercars = filtercars.filter(hotel => {
      return (
        hotel.name1 === this.state.name1 ||
        hotel.price_category === this.state.price_category
      );
    });

    if (this.state.name1 && this.state.price_category) {
      filtercars = filtercars.filter(hotel => {
        return (
          hotel.name1 === this.state.name1 &&
          hotel.price_category === this.state.price_category
        );
      });
    }

    return (
      <div>
        <HomeResult cars={filtercars} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Home;
