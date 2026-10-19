// Online stock photos are used as placeholders (with local SVG fallbacks if offline).
// Replace with your own artwork: put files in src/assets/artwork/ and set
// image: local("my-drawing.webp") and remove `fallback`.
// category: Drawing | Sketch | Digital Art | Recycled Material Art | Sculpture | Creative Experiment
const local = (file) => new URL(`../assets/artwork/${file}`, import.meta.url).href;
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

export const artwork = [
  { title: "Drawing Study", category: "Drawing", description: "A detailed drawing exploring light and shadow.", image: photo("photo-1513364776144-60967b0f800f"), fallback: local("drawing.svg"), alt: "Colourful paint and brushes" },
  { title: "Quick Sketch", category: "Sketch", description: "A fast sketch capturing an idea before it disappears.", image: photo("photo-1452860606245-08befc0ff752"), fallback: local("sketch.svg"), alt: "Sketchbook and pencils" },
  { title: "Digital Composition", category: "Digital Art", description: "A digital piece mixing shape, colour and code-inspired patterns.", image: photo("photo-1547891654-e66ed7ebb968"), fallback: local("digital-art.svg"), alt: "Abstract colourful composition" },
  { title: "Reused Materials", category: "Recycled Material Art", description: "Art made from recycled materials given a second life.", image: photo("photo-1532996122724-e3c354a0b15b"), fallback: local("recycled.svg"), alt: "Recycled materials" },
  { title: "Form and Balance", category: "Sculpture", description: "A sculpture exploring structure and balance.", image: photo("photo-1544967082-d9d25d867d66"), fallback: local("sculpture.svg"), alt: "Sculpture" },
  { title: "Open Experiment", category: "Creative Experiment", description: "An experiment with no fixed rules, just curiosity.", image: photo("photo-1541961017774-22349e4a1262"), fallback: local("experiment.svg"), alt: "Abstract art experiment" },
];
