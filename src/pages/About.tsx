import axios from "axios";
import React, { useState, useEffect } from "react";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const [data, setData] = useState("");
  // const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
  }, [data]);

  return (
    <div>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
    </div>
  );
};

export default AboutPage;
