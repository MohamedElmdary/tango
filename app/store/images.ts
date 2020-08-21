export const images: { uri: string }[] = [];

for (let i = 0; i < 15; i++) {
  const uri = `http://lorempixel.com/${100 + i}/${100 + i}/`;
  images.push({ uri });
}

export default images;
