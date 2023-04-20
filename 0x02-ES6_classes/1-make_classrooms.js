// imports ClassRoom function and creates a function that 
// returns array of 3 ClassRoom objects sizes sizes 19, 20, and 34
import ClassRoom  from './0-classroom'

function initializeRooms() {
    const sizes = [19, 20, 34];
    const rooms = sizes.map(size => new ClassRoom(size));
    return rooms;
  }
const rooms = initializeRooms();
console.log(rooms);