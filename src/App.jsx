import { useState } from "react";
import {
  GoPin,
  GoRocket,
  GoPeople,
  GoCodeOfConduct,
  GoArrowDownLeft,
  GoArrowUpRight,
} from "react-icons/go";
("react-icons/fa");

import "./App.css";
import Template from "./main/Template";

function App() {
  const [searchInput, setSearchInput] = useState("");

  function performSearch() {
    alert(`Searching for: ${searchInput}`);
    console.log(searchInput);
  }
  const allData = [
    {
      id: 1,
      title: "Sales",
      count: 6765,
      percent: -9,
      duration: "since last week",
      icon: <GoPin />,
      down: <GoArrowDownLeft />,
    },
    {
      id: 2,
      title: "Earning",
      count: 34540,
      percent: +26,
      duration: "since last week",
      icon: <GoRocket />,
      upp: <GoArrowUpRight />,
    },
    {
      id: 3,
      title: "Visitors",
      count: 4357,
      percent: +34,
      duration: "since last week",
      icon: <GoPeople />,
      upp: <GoArrowUpRight />,
    },
    {
      id: 4,
      title: "Orders",
      count: 543,
      percent: -21,
      duration: "since last week",
      icon: <GoCodeOfConduct />,
      down: <GoArrowDownLeft />,
    },
  ];
  const filteredData = allData.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <input
                type="text"
                id="searchInput"
                placeholder="Type to search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button onClick={performSearch}>Search</button>{" "}
            </div>
          </div>
        </div>
        {
          <div className="app-container">
            {filteredData.map((item) => (
              <Template key={item.id} {...item} />
            ))}
          </div>
        }
      </div>
    </>
  );
}

export default App;
