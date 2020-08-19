import { UserModel } from "../interfaces/UserModel";
import { StoryModel } from "../interfaces/storyModel";

interface Stories {
  user: UserModel;
  recentUpdates: StoryModel[];
  stories: StoryModel[];
}

const stories: Stories = {
  user: new UserModel(
    /* \n */
    0,
    "Jennifer Fisher",
    { uri: "http://lorempixel.com/200/200" },
  ),
  recentUpdates: [],
  stories: [],
};

for (let i = 0; i < 3; i++) {
  stories.recentUpdates.push(
    new StoryModel(
      i,
      { uri: `http://lorempixel.com/${100 + i}/${100 + i}` },
      "Harold Black",
      `${2 + i} minutes ago`,
    ),
  );
}

for (let i = 0; i < 15; i++) {
  stories.stories.push(
    new StoryModel(
      i,
      { uri: `http://lorempixel.com/${150 + i}/${150 + i}` },
      "Harold Black",
      `Today, 10:${20 + i} AM`,
    ),
  );
}

export { stories };
