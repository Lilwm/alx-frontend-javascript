const task = false;
const task2 = true;

export default function taskBlock(trueOrFalse) {
  let newTask = task;
  let newTask2 = task2;

  if (trueOrFalse) {
    newTask2 = true;
    newTask = false;
  }

  return [newTask, newTask2];
}
