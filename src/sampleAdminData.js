export const users = [
  { id: 'u001', name: 'Chinedu Okafor', email: 'chinedu.okafor@example.com', location: 'Enugu, South-East' },
  { id: 'u002', name: 'Aisha Bello', email: 'aisha.bello@example.com', location: 'Kano, North-West' },
  { id: 'u003', name: 'Tunde Balogun', email: 'tunde.balogun@example.com', location: 'Ibadan, South-West' },
  { id: 'u004', name: 'Idris Musa', email: 'idris.musa@example.com', location: 'Minna, North-Central' },
  { id: 'u005', name: 'Nsikak Essien', email: 'nsikak.essien@example.com', location: 'Uyo, South-South' },
  { id: 'u006', name: 'Bilkisu Garba', email: 'bilkisu.garba@example.com', location: 'Sokoto, North-West' },
  { id: 'u007', name: 'Ngozi Nwankwo', email: 'ngozi.nwankwo@example.com', location: 'Owerri, South-East' },
  { id: 'u008', name: 'Damilola Adeyemi', email: 'damilola.adeyemi@example.com', location: 'Lagos, South-West' },
  { id: 'u009', name: 'Yakubu Abdullahi', email: 'yakubu.abdullahi@example.com', location: 'Jos, North-Central' },
  { id: 'u010', name: 'Itoro Umoh', email: 'itoro.umoh@example.com', location: 'Calabar, South-South' },
  { id: 'u011', name: 'Zainab Usman', email: 'zainab.usman@example.com', location: 'Gusau, North-West' },
  { id: 'u012', name: 'Emeka Obi', email: 'emeka.obi@example.com', location: 'Onitsha, South-East' },
  { id: 'u013', name: 'Abiodun Adebayo', email: 'abiodun.adebayo@example.com', location: 'Abeokuta, South-West' },
  { id: 'u014', name: 'Grace Tanko', email: 'grace.tanko@example.com', location: 'Lokoja, North-Central' },
  { id: 'u015', name: 'Preye Tamuno', email: 'preye.tamuno@example.com', location: 'Yenagoa, South-South' },
  { id: 'u016', name: 'Kabir Lawal', email: 'kabir.lawal@example.com', location: 'Katsina, North-West' },
  { id: 'u017', name: 'Chika Eze', email: 'chika.eze@example.com', location: 'Abakaliki, South-East' },
  { id: 'u018', name: 'Adefolake Ogunleye', email: 'adefolake.ogunleye@example.com', location: 'Akure, South-West' },
  { id: 'u019', name: 'Suleiman Aliyu', email: 'suleiman.aliyu@example.com', location: 'Makurdi, North-Central' },
  { id: 'u020', name: 'Boma George', email: 'boma.george@example.com', location: 'Port Harcourt, South-South' },
];

export const userDetailsMap = {
  u001: {
    user: users[0],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Motion+detected+near+the+door', message: 'Motion detected near the door', timestamp: '2025-05-05T08:30:00Z', unread:true},
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Suspicious+movement+detected+in+hallway', message: 'Suspicious movement detected in hallway', timestamp: '2025-05-05T09:00:00Z', unread:true}
    ]
  },
  u002: {
    user: users[1],
    alerts: [
      { id: 3, image_url: 'https://source.unsplash.com/400x200/?window,open', message: 'Window opened unexpectedly', timestamp: '2025-05-05T09:45:00Z', unread:true},
      { id: 4, image_url: 'https://source.unsplash.com/400x200/?motion,detected', message: 'Motion detected in living room', timestamp: '2025-05-05T10:05:00Z', unread:true}
    ]
  },
  u003: {
    user: users[2],
    alerts: [
      { id: 5, image_url: 'https://source.unsplash.com/400x200/?door,forced,open', message: 'Door forced open', timestamp: '2025-05-05T11:20:00Z', unread:true},
      { id: 6, image_url: 'https://source.unsplash.com/400x200/?suspicious,motion', message: 'Suspicious motion detected at entrance', timestamp: '2025-05-05T12:15:00Z', unread:true}
    ]
  },
  u004: {
    user: users[3],
    alerts: [
      { id: 7, image_url: 'https://source.unsplash.com/400x200/?garage,open', message: 'Garage door left open', timestamp: '2025-05-05T13:30:00Z', unread:true},
      { id: 8, image_url: 'https://source.unsplash.com/400x200/?motion,sensor', message: 'Motion detected near the back door', timestamp: '2025-05-05T14:00:00Z', unread:true}
    ]
  },
  u005: {
    user: users[4],
    alerts: [
      { id: 9, image_url: 'https://source.unsplash.com/400x200/?light,alarm', message: 'Alarm triggered by light movement', timestamp: '2025-05-05T15:00:00Z', unread:true},
      { id: 10, image_url: 'https://source.unsplash.com/400x200/?detector,alert', message: 'Unusual motion detected in the office', timestamp: '2025-05-05T15:30:00Z', unread:true}
    ]
  },
  u006: {
    user: users[5],
    alerts: [
      { id: 11, image_url: 'https://source.unsplash.com/400x200/?kitchen,motion', message: 'Motion detected in the kitchen', timestamp: '2025-05-05T16:20:00Z', unread:true},
      { id: 12, image_url: 'https://source.unsplash.com/400x200/?suspicious,person', message: 'Suspicious person detected at back door', timestamp: '2025-05-05T17:00:00Z', unread:true}
    ]
  },
  u007: {
    user: users[6],
    alerts: [
      { id: 13, image_url: 'https://source.unsplash.com/400x200/?window,open,alert', message: 'Window opened by unauthorized person', timestamp: '2025-05-05T17:30:00Z', unread:true},
      { id: 14, image_url: 'https://source.unsplash.com/400x200/?night,sensor', message: 'Motion detected in front of the house', timestamp: '2025-05-05T18:00:00Z', unread:true}
    ]
  },
  u008: {
    user: users[7],
    alerts: [
      { id: 15, image_url: 'https://source.unsplash.com/400x200/?house,sensor', message: 'Door alarm triggered at the entrance', timestamp: '2025-05-05T19:20:00Z', unread:true},
      { id: 16, image_url: 'https://source.unsplash.com/400x200/?security,camera', message: 'Camera detects movement at front gate', timestamp: '2025-05-05T19:45:00Z', unread:true}
    ]
  },
  u009: {
    user: users[8],
    alerts: [
      { id: 17, image_url: 'https://source.unsplash.com/400x200/?path,alert', message: 'Motion detected near backyard', timestamp: '2025-05-05T20:10:00Z', unread:true},
      { id: 18, image_url: 'https://source.unsplash.com/400x200/?gate,open', message: 'Main gate opened unexpectedly', timestamp: '2025-05-05T20:45:00Z', unread:true}
    ]
  },
  u010: {
    user: users[9],
    alerts: [
      { id: 19, image_url: 'https://source.unsplash.com/400x200/?door,sensor', message: 'Front door sensor triggered', timestamp: '2025-05-05T21:00:00Z', unread:true},
      { id: 20, image_url: 'https://source.unsplash.com/400x200/?alarm,triggered', message: 'Alarm triggered at the rear door', timestamp: '2025-05-05T21:30:00Z', unread:true}
    ]
  },
  u011: {
    user: users[10],
    alerts: [
      { id: 21, image_url: 'https://source.unsplash.com/400x200/?security,alert', message: 'Security alert in the living room', timestamp: '2025-05-05T22:15:00Z', unread:true},
      { id: 22, image_url: 'https://source.unsplash.com/400x200/?suspicious,person', message: 'Unidentified person near the front door', timestamp: '2025-05-05T22:50:00Z', unread:true}
    ]
  },
  u012: {
    user: users[11],
    alerts: [
      { id: 23, image_url: 'https://source.unsplash.com/400x200/?movement,detection', message: 'Motion detected in the backyard', timestamp: '2025-05-05T23:00:00Z', unread:true},
      { id: 24, image_url: 'https://source.unsplash.com/400x200/?camera,suspicious', message: 'Suspicious figure captured by security camera', timestamp: '2025-05-06T00:00:00Z', unread:true}
    ]
  },
  u013: {
    user: users[12],
    alerts: [
      { id: 25, image_url: 'https://source.unsplash.com/400x200/?monitor,alert', message: 'Alert: Movement detected near the garage', timestamp: '2025-05-06T01:00:00Z', unread:true},
      { id: 26, image_url: 'https://source.unsplash.com/400x200/?security,alarm', message: 'Garage door alarm triggered', timestamp: '2025-05-06T01:30:00Z', unread:true}
    ]
  },
  u014: {
    user: users[13],
    alerts: [
      { id: 27, image_url: 'https://source.unsplash.com/400x200/?door,security', message: 'Unusual activity near the back door', timestamp: '2025-05-06T02:00:00Z', unread:true},
      { id: 28, image_url: 'https://source.unsplash.com/400x200/?alert,sensor', message: 'Sensor alert triggered by back door movement', timestamp: '2025-05-06T03:30:00Z', unread:true}
    ]
  },
  u015: {
    user: users[14],
    alerts: [
      { id: 29, image_url: 'https://source.unsplash.com/400x200/?sensor,triggered', message: 'Unauthorized movement in hallway', timestamp: '2025-05-06T04:15:00Z', unread:true},
      { id: 30, image_url: 'https://source.unsplash.com/400x200/?door,opened', message: 'Front door opened unexpectedly', timestamp: '2025-05-06T05:00:00Z', unread:true}
    ]
  },
  u016: {
    user: users[15],
    alerts: [
      { id: 31, image_url: 'https://source.unsplash.com/400x200/?security,alert', message: 'Alert: Security breach detected in garage', timestamp: '2025-05-06T06:10:00Z', unread:true},
      { id: 32, image_url: 'https://source.unsplash.com/400x200/?movement,detection', message: 'Suspicious movement in the kitchen', timestamp: '2025-05-06T07:30:00Z', unread:true}
    ]
  },
  u017: {
    user: users[16],
    alerts: [
      { id: 33, image_url: 'https://source.unsplash.com/400x200/?motion,security', message: 'Motion detected in front yard', timestamp: '2025-05-06T08:20:00Z', unread:true},
      { id: 34, image_url: 'https://source.unsplash.com/400x200/?camera,suspicious', message: 'Suspicious individual near the property entrance', timestamp: '2025-05-06T08:50:00Z', unread:true}
    ]
  },
  u018: {
    user: users[17],
    alerts: [
      { id: 35, image_url: 'https://source.unsplash.com/400x200/?frontdoor,alert', message: 'Alert: Front door sensor triggered', timestamp: '2025-05-06T09:30:00Z', unread:true},
      { id: 36, image_url: 'https://source.unsplash.com/400x200/?detector,triggered', message: 'Motion detected in the office area', timestamp: '2025-05-06T10:00:00Z', unread:true}
    ]
  },
  u019: {
    user: users[18],
    alerts: [
      { id: 37, image_url: 'https://source.unsplash.com/400x200/?motion,entry', message: 'Unauthorized motion detected near entry', timestamp: '2025-05-06T11:00:00Z', unread:true},
      { id: 38, image_url: 'https://source.unsplash.com/400x200/?camera,alarm', message: 'Alert: Camera detected motion in backyard', timestamp: '2025-05-06T12:30:00Z', unread:true}
    ]
  },
  u020: {
    user: users[19],
    alerts: [
      { id: 39, image_url: 'https://source.unsplash.com/400x200/?sensor,alarm', message: 'Suspicious activity detected near entrance', timestamp: '2025-05-06T13:30:00Z', unread:true},
      { id: 40, image_url: 'https://source.unsplash.com/400x200/?motion,camera', message: 'Camera detected movement at the front gate', timestamp: '2025-05-06T14:00:00Z', unread:true}
    ]
  }
};

