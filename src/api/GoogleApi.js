const GoogleApi = () => {
  const GOOGLEURL = process.env.REACT_APP_GOOGLE_URL;

  const loadDetails = async (placeId) => {
    const apiURL = `${GOOGLEURL}?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&place_id=${placeId}`;
    const res = await fetch(apiURL, { method: "GET", mode: "no-cors", headers: { "Content-Type": "application/json"} });
    if (!res.ok) {
      throw `something went wrong by calling details from ${placeId}`;
    };

    return res.json();
  }

  return {
    loadDetails,
  };
};

export default GoogleApi();
