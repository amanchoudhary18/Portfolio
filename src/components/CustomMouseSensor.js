import { MouseSensor } from "@dnd-kit/core";
class CustomMouseSensor extends MouseSensor {
  static activators = [
    {
      eventName: "onMouseDown",
      handler: ({ nativeEvent: event }) => {
        return !isInteractiveElement(event.target);
      },
    },
  ];
}
function isInteractiveElement(element) {
  const interactiveElements = ["button", "svg", "input", "path", "a"];
  return interactiveElements.includes(element.tagName.toLowerCase());
}
export default CustomMouseSensor;
