
import livingroom from "./assets/images/livingroom.jpg"
import garae from "./assets/images/garage.jpg"
import frontdoor from "./assets/images/frontdoor.webp"
import intruder from "./assets/images/intruder.jpg"
const userAlerts = [
    {
      id: 1,
      image_url: livingroom,
      message: 'Motion detected in the living room',
      timestamp: '2025-05-05T09:00:00Z',
    },
    {
      id: 2,
      image_url: garae,
      message: 'Unexpected movement at the front door',
      timestamp: '2025-05-05T10:15:00Z',
    },
    {
      id: 3,
      image_url: frontdoor,
      message: 'Motion detected near the garage',
      timestamp: '2025-05-05T11:45:00Z',
    },
    {
      id: 4,
      image_url: intruder,
      message: 'Motion detected at the backdoor',
      timestamp: '2025-05-05T11:45:00Z',
    },
  ];
  
  export default userAlerts;
  