import StickRegime from "../entities/StickRegime";

/** Режимы работы линий */
const stickRegimes = {
  standart: new StickRegime("#7B68EE", 2, null), // Стандартный
  backlit: new StickRegime("#FF4500", 3, null), // Подсвеченная (при наведении)
  addedPointFrame: new StickRegime("#FFA001", 2, []), // У рамки при добавлении точки
  turningAxes: new StickRegime("#8A2BE2", 4, null), // У оси при вращении
  mirror: new StickRegime("#FFD700", 2, null), // У рамки при трансформировании
  frontX: new StickRegime("#DC143C", 2, null), // Передний у оси X
  frontY: new StickRegime("#32CD32", 2, null), // Передний у оси Y
  frontZ: new StickRegime("#4682B4", 2, null), // Передний у оси Z
  backX: new StickRegime("#B22222", 2, [10, 3]), // Задний у оси X
  backY: new StickRegime("#66CDAA", 2, [10, 3]), // Задний у оси Y
  backZ: new StickRegime("#5F9EA0", 2, [10, 3]), // Задний у оси Z
};

export default stickRegimes;
