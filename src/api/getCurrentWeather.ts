import instance from "./instance";

interface getCurrentWeatherArgs {
    q: string
    lang?: string
}

const getCurrentWeather = async ({q, lang}: getCurrentWeatherArgs) => {
    instance.get('/current.json', {
        params: {
            q, lang 
        }
    }).then((response) => response).catch((error) => console.log(error))
}

export { getCurrentWeather }