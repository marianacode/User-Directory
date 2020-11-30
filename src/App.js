import React, { useMemo, useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import Columns from "./utils/Colums"

import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://randomuser.me/api/?nat=us&results=20");
      setData(result.data.results);
    })();
  }, []);


  const columns = useMemo(
    () => Columns(), [])

  return (
  <div className="App">
    <Table columns={columns} data={data} />
    </div>
    );
};

export default App;
