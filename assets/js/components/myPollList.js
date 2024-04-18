import { myFetch } from "../Utils/apiUtils.js";

export const myPollList = async () => {
  const endpoint = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=pm10,pm2_5';
  const result = await myFetch(endpoint)
  
  const { current } = result
  const arrPolls = Object.keys(current).slice(2)
    
    arrPolls.map(value =>{
      const li = document.createElement('li')

      const span_image = document.createElement('span')
      span_image.textContent = 'IMAGE'

      const span_name = document.createElement('span')
      span_name.textContent = value

      const span_number = document.createElement('span')
      span_number.textContent = current[value]

      li.appendChild(span_image, span_name, span_number)
      ul.appendChild(li)
    })

  console.log(ul);
};
