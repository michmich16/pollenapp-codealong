import { myFetch } from "../Utils/apiUtils.js";

export const myPollList = () => {
  const endpoint ="https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=pm10,pm2_5";
  const result = await myFetch(endpoint)
};
