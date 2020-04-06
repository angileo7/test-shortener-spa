import React, { useEffect, useState } from "react";
import axios from 'axios';
import Styled from "styled-components";
import UrlItem from "./UrlItem";

const Wrapper = Styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    border-color: #FF0364;
    border-style: solid;
    width: 1100px;
`;

const Container = Styled.div`
    border-style: solid;
    padding: 10px 10px 10px 10px;
    width: 4500px;
    margin: 10px;
    border-color: #FF0364;
    border-radius: 10px;
`;

const MostVisitedLinksComponent= () => {
  const [urlsData, setUrlsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/urls',
      );
      setUrlsData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
    <Wrapper>
      <Container>
        Top 100 most frequently accessed URLs
        <hr />
        {urlsData.map((element, index) => (
          <UrlItem key={index} {...element} />
        ))}
      </Container>
    </Wrapper>
    </>
  );
}


export default MostVisitedLinksComponent;
