import React from "react";
import { Select } from "antd";
import { Cities } from "./Cities";
import { Country } from "./Country";

const { Option } = Select;

var xzed = 0;

function SearchBox(props) {
  return (
    <div className="element">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={(val) => {
          xzed = val;
        }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {Country.map((el) => {
          return <Option value={el.name}>{el.name}</Option>;
        })}
      </Select>

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a city"
        optionFilterProp="children"
        onChange={(val) => {
          props.getZipCode(val);
          props.getData(xzed);
        }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {Cities.map((el) => {
          return <Option value={el.name}>{el.name}</Option>;
        })}
      </Select>

      <div>
        {props.loading ? (
          <div>loading</div>
        ) : (
          <div>
            {props.data ? (
              <div className="salats">
                <div className="salat">
                  Fajr {props.data.results.Fajr.split("%")}
                </div>
                <div className="salat">
                  Dhuhr {props.data.results.Dhuhr.split("%")}
                </div>
                <div className="salat">
                  Asr {props.data.results.Asr.split("%")}
                </div>
                <div className="salat">
                  Maghreb {props.data.results.Maghrib.split("%")}
                </div>
                <div className="salat">
                  Isha {props.data.results.Isha.split("%")}
                </div>
              </div>
            ) : (
              <div>no data</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
