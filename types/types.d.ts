export interface IWeatherInfo {
  location: string,
  weather: string,
  temperature: number,
}

type Location = {
  title: string
  location_type: string
  woeid: number
  latt_long: string
}

type Sourse = {
  title: string,
  slug: string,
  url: string,
  crawl_rate: number
} 

export type Weather = {
  id: number
  weather_state_name: string
  weather_state_abbr: string
  wind_direction_compass: string
  created: string
  applicable_date: string
  min_temp: number
  max_temp: number
  the_temp: number
  wind_speed: number
  wind_direction: number
  air_pressure: number
  humidity: number
  visibility: number
  predictability: number
}

export interface IResponse {
  consolidated_weather: Weather[],
  time: string,
  sun_rise: string,
  sun_set: string,
  timezone_name: string,
  parent: Location,
  sources: Sourse[],
  title: string,
  location_type: string,
  woeid: number,
  latt_long: string,
  timezone: string
}e