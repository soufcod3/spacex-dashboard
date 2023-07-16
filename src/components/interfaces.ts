export interface IDatum {
  title: string,
  datum: string|number
}

export interface IRocket {
  name: string,
  active: boolean,
  firstFlight: string,
  description: string,
  wikipedia: string,
  image: string,
}

export interface ILaunch {
  flight_number: any,
  name: any,
  date_utc: any,
  date_unix: any,
  date_local: any,
  date_precision: any,
  static_fire_date_utc: any,
  static_fire_date_unix: any,
  tdb: any,
  net: any,
  window: any,
  rocket: any,
  success: any,
  failures: any[],
  upcoming: any,
  details: any,
  fairings: any,
  crew: any[],
  ships: any,
  capsules: any,
  payloads: any,
  launchpad: any,
  cores: any[],
  links: any,
  reddit: any,
  flickr: any,
  presskit: any,
  webcast: any,
  youtube_id: any,
  article: any,
  wikipedia: any,
  auto_update: any
}

export interface INews {
  details: string,
  event_date_unix: number,
  event_date_utc: string,
  id: string,
  links: any,
  title: string
}