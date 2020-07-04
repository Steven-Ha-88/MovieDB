import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../Config";
import { Container } from "./style";

interface Props {
  match: { params: { id: string } };
}

interface Trailers {
  key: string;
}

const Trailers: React.FC<Props> = (props) => {
  const id = props.match.params.id;

  const [trailerId, setTrailerId] = useState<Array<Trailers>>([]);

  const trailerSelect = (videos: any) => {
    const trailer = videos.filter(
      (items: { type: string }) => items.type === "Trailer"
    );
    return trailer;
  };

  useEffect(() => {
    fetch(`${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setTrailerId(trailerSelect(res.results));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("myTrailer", trailerId);
  return (
    <Container>
      {trailerId && (
        <iframe
          width='60%'
          height='60%'
          src={`https://www.youtube.com/embed/${
            trailerId[0] && trailerId[0].key
          }`}
          title='trailers'></iframe>
      )}
    </Container>
  );
};

export default Trailers;
