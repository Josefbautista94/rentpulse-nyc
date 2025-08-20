import axios from "axios";

export async function getForecast(geoID = "BX", months = 12) {
  const res = await axios.get("/api/forecast", {
    params: { geoID, months },
  });

  return res.data();
}
