import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}