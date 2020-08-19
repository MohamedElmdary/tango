import { CallModal } from "../interfaces";

const calls: CallModal[] = [];

for (let i = 0; i < 30; i++) {
  calls.push(
    new CallModal(
      i,
      "Helen Johnston " + i,
      { uri: `http://lorempixel.com/${100 + i}/${100 + i}/` },
      i % 2 === 0 ? "Video" : "Voice",
      i % 2 !== 0,
      `${i + 1} minutes ago`,
    ),
  );
}

export { calls };
