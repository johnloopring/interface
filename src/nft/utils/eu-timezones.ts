export function consentRequired(tz: string): boolean {
  switch (tz) {
    case 'Europe/Vienna':
      return true
    case 'Europe/Brussels':
      return true
    case 'Europe/Sofia':
      return true
    case 'Europe/Zagreb':
      return true
    case 'Asia/Famagusta':
      return true
    case 'Asia/Nicosia':
      return true
    case 'Europe/Prague':
      return true
    case 'Europe/Copenhagen':
      return true
    case 'Europe/Tallinn':
      return true
    case 'Europe/Helsinki':
      return true
    case 'Europe/Paris':
      return true
    case 'Europe/Berlin':
      return true
    case 'Europe/Busingen':
      return true
    case 'Europe/Athens':
      return true
    case 'Europe/Budapest':
      return true
    case 'Europe/Dublin':
      return true
    case 'Europe/Rome':
      return true
    case 'Europe/Riga':
      return true
    case 'Europe/Vilnius':
      return true
    case 'Europe/Luxembourg':
      return true
    case 'Europe/Malta':
      return true
    case 'Europe/Amsterdam':
      return true
    case 'Europe/Warsaw':
      return true
    case 'Atlantic/Azores':
      return true
    case 'Atlantic/Madeira':
      return true
    case 'Europe/Lisbon':
      return true
    case 'Europe/Bucharest':
      return true
    case 'Europe/Bratislava':
      return true
    case 'Europe/Ljubljana':
      return true
    case 'Africa/Ceuta':
      return true
    case 'Atlantic/Canary':
      return true
    case 'Europe/Madrid':
      return true
    case 'Europe/Stockholm':
      return true
    default:
      return false
  }
}