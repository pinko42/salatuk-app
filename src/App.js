import React, { useState } from "react";
import "./App.css";
import { Country } from "./components/Country";
import { Cities } from "./components/Cities";
import Navbar from "./components/Navbar";
import SearchBox from "./components/Search";
import axios from "axios";
import "antd/dist/antd.css";
var y = 0;

function App() {
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("zegjgjgj"); // ask mehdi
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const getZipCode = (value) => {
    Cities.map((el, index) => {
      if (el.name === value) {
        y = index;
      }
    });

    console.log(y);
  };

  const getData = async (value) => {
    var dis = Country.find((el) => el.name === value);
    console.log(Cities[y])
    console.log(y)
    setZipcode(Cities[y].id)
    setLoading(true);
    try {
    console.log(zipcode)

      const response = await axios.get(
        `http://www.islamicfinder.us/index.php/api/prayer_times?country=${
          dis.code
        }&zipcode=${
          Cities[y].id < 10 ? "0" + Cities[y].id * 1000 : Cities[y].id * 1000
        }`
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card-container">
        
          <SearchBox
            getData={getData}
            data={data}
            loading={loading}
            getZipCode={getZipCode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
