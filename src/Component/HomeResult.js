import React, { Component } from "react";

class HomeResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CarPrice: "",
      price_category: ""
    };
  }

  render() {
    const { carPrice, price_category, cars, onChange, name1 } = this.props;
    console.log(cars.length);
    return (
      <div>
        <table>
          <tr>
            <td>
              Car Price:
              <input
                name="carPrice"
                type="text"
                value={name1}
                onChange={onChange}
              />
            </td>
            <td>
              Category :
              <select
                name="price_category"
                value={price_category}
                onChange={onChange}
              >
                <option>Select</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </td>
            <td>:</td>
          </tr>
        </table>
        <center>
          <h1>cars List</h1>
        </center>
        {cars.map(car => (
          <div className="card" key={car.id}>
            <div className="card-body">
              <h3 className="card-subtitle mb-2 text-muted">{car.name1}</h3>
              <p className="card-text">{car.description}</p>
              <p className="card-text">{car.carPrice}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default HomeResult;
