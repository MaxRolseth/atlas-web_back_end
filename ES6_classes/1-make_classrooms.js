import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomList = [];
  const maxStudents = [19, 20, 34];

  for (const num of maxStudents) {
    const newRoom = new ClassRoom(num);
    roomList.push(newRoom);
  }
  return roomList;
}
