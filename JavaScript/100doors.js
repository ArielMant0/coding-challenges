function getFinalOpenedDoors (numDoors) {
    // Good luck!
    const doors = [];
    for (let i = 1; i*i <= numDoors; ++i) {
        doors.push(i*i);
    }
    return doors;
}
