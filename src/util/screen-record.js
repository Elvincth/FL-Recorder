// prettier-ignore
import { desktopCapturer } from "electron";
//prettier-ignore-end

let options = {
  types: ["window", "screen"],
  fetchWindowIcons: true,
};

export async function start() {
  await desktopCapturer.getSources(options).then(async (sources) => {
    try {
      console.log(sources);
      return sources;
    } catch (error) {
      console.log(error);
      return;
    }
    // for (const source of sources) {
    //   console.log(source);
    // }
  });
}
