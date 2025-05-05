export const users = [
  { id: 'u001', name: 'John Doe', email: 'john@example.com', location: 'Lagos, Nigeria' },
  { id: 'u002', name: 'Jane Smith', email: 'jane@example.com', location: 'Abuja, Nigeria' },
  { id: 'u003', name: 'Mark Lee', email: 'mark@example.com', location: 'Port Harcourt, Nigeria' },
  { id: 'u004', name: 'Tommy Jacobs', email: 'tommy@example.com', location: 'Owerri, Nigeria' },
  { id: 'u005', name: 'Alice White', email: 'alice@example.com', location: 'Calabar, Nigeria' },
  { id: 'u006', name: 'Samuel Green', email: 'samuel@example.com', location: 'Benin City, Nigeria' },
  { id: 'u007', name: 'Sarah King', email: 'sarah@example.com', location: 'Kano, Nigeria' },
  { id: 'u008', name: 'Emma Thompson', email: 'emma@example.com', location: 'Lagos, Nigeria' },
  { id: 'u009', name: 'Luke Davis', email: 'luke@example.com', location: 'Abuja, Nigeria' },
  { id: 'u010', name: 'Matthew Brown', email: 'matthew@example.com', location: 'Port Harcourt, Nigeria' },
  { id: 'u011', name: 'Olivia Taylor', email: 'olivia@example.com', location: 'Lagos, Nigeria' },
  { id: 'u012', name: 'Ethan Walker', email: 'ethan@example.com', location: 'Abuja, Nigeria' },
  { id: 'u013', name: 'Natalie Harris', email: 'natalie@example.com', location: 'Owerri, Nigeria' },
  { id: 'u014', name: 'Ryan Carter', email: 'ryan@example.com', location: 'Benin City, Nigeria' },
  { id: 'u015', name: 'Sophia Martinez', email: 'sophia@example.com', location: 'Port Harcourt, Nigeria' },
  { id: 'u016', name: 'David Wilson', email: 'david@example.com', location: 'Lagos, Nigeria' },
  { id: 'u017', name: 'Grace Lee', email: 'grace@example.com', location: 'Abuja, Nigeria' },
  { id: 'u018', name: 'Michael Adams', email: 'michael@example.com', location: 'Calabar, Nigeria' },
  { id: 'u019', name: 'Pamela Jensen', email: 'pamela@example.com', location: 'Stoneland, Wallis and Futuna' },
  { id: 'u020', name: 'Lisa Mccarty', email: 'lisa@example.com', location: 'Bonillaview, Grenada' },
];

export const userDetailsMap = {
  u001: {
    user: users[0],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=John+Alert+1', message: 'Motion detected in the living room', timestamp: '2025-05-05T08:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=John+Alert+2', message: 'Window opened unexpectedly', timestamp: '2025-05-05T09:00:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=John+Alert+3', message: 'Garage door alarm triggered', timestamp: '2025-05-05T09:30:00Z' }
    ],
  },
  u002: {
    user: users[1],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Jane+Alert+1', message: 'Motion detected in hallway', timestamp: '2025-05-05T10:15:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Jane+Alert+2', message: 'Door forced open', timestamp: '2025-05-05T10:45:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Jane+Alert+3', message: 'Intruder in the backyard', timestamp: '2025-05-05T11:00:00Z' },
      { id: 4, image_url: 'https://via.placeholder.com/400x200?text=Jane+Alert+4', message: 'Motion detected near the fence', timestamp: '2025-05-05T11:30:00Z' }
    ],
  },
  u003: {
    user: users[2],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Mark+Alert+1', message: 'Unusual sound detected', timestamp: '2025-05-05T11:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Mark+Alert+2', message: 'Motion detected in the garden', timestamp: '2025-05-05T11:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Mark+Alert+3', message: 'Door forced open', timestamp: '2025-05-05T12:00:00Z' },
      { id: 4, image_url: 'https://via.placeholder.com/400x200?text=Mark+Alert+4', message: 'Intruder in the driveway', timestamp: '2025-05-05T12:15:00Z' }
    ],
  },
  u004: {
    user: users[3],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Tommy+Alert+1', message: 'Person detected in front yard', timestamp: '2025-05-05T12:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Tommy+Alert+2', message: 'Back door opened', timestamp: '2025-05-05T12:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Tommy+Alert+3', message: 'Garage door opened', timestamp: '2025-05-05T13:00:00Z' },
      { id: 4, image_url: 'https://via.placeholder.com/400x200?text=Tommy+Alert+4', message: 'Motion detected near the shed', timestamp: '2025-05-05T13:30:00Z' }
    ],
  },
  u005: {
    user: users[4],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Alice+Alert+1', message: 'Motion detected near the kitchen', timestamp: '2025-05-05T13:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Alice+Alert+2', message: 'Window smashed', timestamp: '2025-05-05T13:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Alice+Alert+3', message: 'Person at the back door', timestamp: '2025-05-05T14:00:00Z' }
    ],
  },
  u006: {
    user: users[5],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Samuel+Alert+1', message: 'Alert: Unknown person in the garden', timestamp: '2025-05-05T14:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Samuel+Alert+2', message: 'Alert: Front door alarm triggered', timestamp: '2025-05-05T14:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Samuel+Alert+3', message: 'Motion detected near the window', timestamp: '2025-05-05T15:00:00Z' },
      { id: 4, image_url: 'https://via.placeholder.com/400x200?text=Samuel+Alert+4', message: 'Alert: Person near the gate', timestamp: '2025-05-05T15:30:00Z' }
    ],
  },
  u007: {
    user: users[6],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Sarah+Alert+1', message: 'Alert: Motion detected near the door', timestamp: '2025-05-05T15:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Sarah+Alert+2', message: 'Alert: Window opened', timestamp: '2025-05-05T15:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Sarah+Alert+3', message: 'Alert: Person in the garden', timestamp: '2025-05-05T16:00:00Z' }
    ],
  },
  u008: {
    user: users[7],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Emma+Alert+1', message: 'Alert: Unusual movement detected inside', timestamp: '2025-05-05T16:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Emma+Alert+2', message: 'Alert: Front gate left open', timestamp: '2025-05-05T16:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Emma+Alert+3', message: 'Alert: Person outside the fence', timestamp: '2025-05-05T17:00:00Z' }
    ],
  },
  u009: {
    user: users[8],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Luke+Alert+1', message: 'Alert: Doorbell triggered', timestamp: '2025-05-05T17:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Luke+Alert+2', message: 'Alert: Motion detected in backyard', timestamp: '2025-05-05T17:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Luke+Alert+3', message: 'Alert: Person near the garage', timestamp: '2025-05-05T18:00:00Z' }
    ],
  },
  u010: {
    user: users[9],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Matthew+Alert+1', message: 'Alert: Motion detected near the fence', timestamp: '2025-05-05T18:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Matthew+Alert+2', message: 'Alert: Unknown person near the door', timestamp: '2025-05-05T19:00:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Matthew+Alert+3', message: 'Alert: Garage door opened', timestamp: '2025-05-05T19:30:00Z' }
    ],
  },
  u011: {
    user: users[10],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Olivia+Alert+1', message: 'Alert: Unusual movement detected outside', timestamp: '2025-05-05T20:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Olivia+Alert+2', message: 'Alert: Door forced open', timestamp: '2025-05-05T20:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Olivia+Alert+3', message: 'Alert: Person near the backyard', timestamp: '2025-05-05T21:00:00Z' }
    ],
  },
  u012: {
    user: users[11],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Ethan+Alert+1', message: 'Alert: Intruder detected on property', timestamp: '2025-05-05T21:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Ethan+Alert+2', message: 'Alert: Motion detected near garage', timestamp: '2025-05-05T22:00:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Ethan+Alert+3', message: 'Alert: Doorbell ringing', timestamp: '2025-05-05T22:30:00Z' }
    ],
  },
  u013: {
    user: users[12],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Gina+Alert+1', message: 'Alert: Motion detected in garage', timestamp: '2025-05-05T22:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Gina+Alert+2', message: 'Alert: Unknown person by front door', timestamp: '2025-05-05T23:00:00Z' }
    ],
  },
  u014: {
    user: users[13],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Grace+Alert+1', message: 'Alert: Person near backyard gate', timestamp: '2025-05-06T00:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Grace+Alert+2', message: 'Alert: Motion detected on front porch', timestamp: '2025-05-06T00:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Grace+Alert+3', message: 'Alert: Garage door opened', timestamp: '2025-05-06T01:00:00Z' }
    ],
  },
  u015: {
    user: users[14],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Henry+Alert+1', message: 'Alert: Unknown car parked outside', timestamp: '2025-05-06T01:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Henry+Alert+2', message: 'Alert: Motion detected near the front door', timestamp: '2025-05-06T02:00:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Henry+Alert+3', message: 'Alert: Person spotted by side gate', timestamp: '2025-05-06T02:30:00Z' }
    ],
  },
  u016: {
    user: users[15],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Irene+Alert+1', message: 'Alert: Window smashed', timestamp: '2025-05-06T03:00:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Irene+Alert+2', message: 'Alert: Unusual movement in the hallway', timestamp: '2025-05-06T03:30:00Z' },
      { id: 3, image_url: 'https://via.placeholder.com/400x200?text=Irene+Alert+3', message: 'Alert: Unseen movement outside', timestamp: '2025-05-06T04:00:00Z' }
    ],
  },
  u017: {
    user: users[16],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=James+Alert+1', message: 'Alert: Someone in the yard', timestamp: '2025-05-06T04:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=James+Alert+2', message: 'Alert: Side door opened', timestamp: '2025-05-06T05:00:00Z' }
    ],
  },
  u018: {
    user: users[17],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Jessica+Alert+1', message: 'Alert: Person walking near fence', timestamp: '2025-05-06T05:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Jessica+Alert+2', message: 'Alert: Doorbell ringing', timestamp: '2025-05-06T06:00:00Z' }
    ],
  },
  u019: {
    user: users[18],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Kevin+Alert+1', message: 'Alert: Unknown person by front door', timestamp: '2025-05-06T06:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Kevin+Alert+2', message: 'Alert: Motion near the back porch', timestamp: '2025-05-06T07:00:00Z' }
    ],
  },
  u020: {
    user: users[19],
    alerts: [
      { id: 1, image_url: 'https://via.placeholder.com/400x200?text=Lily+Alert+1', message: 'Alert: Window opened', timestamp: '2025-05-06T07:30:00Z' },
      { id: 2, image_url: 'https://via.placeholder.com/400x200?text=Lily+Alert+2', message: 'Alert: Door left unlocked', timestamp: '2025-05-06T08:00:00Z' }
    ],
  },
};

