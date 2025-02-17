const { initializeTimes, updateTimes } = require("../App");

describe("Booking Reducer Functions", () => {
  test("initializeTimes should return the default time slots", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
  test("updateTimes should return the same state when given an action", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-06-10" };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
