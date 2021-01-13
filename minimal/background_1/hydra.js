// Visuals: Hydra

msg.setPort(3336)

function transFormTidal(args) {
  let obj = [];
  for (i = 0; i < args.length; i = i+2) {
    obj[args[i]] = args[i+1];
  }
  return obj;
}
msg.on('/play2', (args) => {
    tidal = transFormTidal(args);
    if (tidal.s === "sin") {
      note = tidal.n;
      saturate = saturate == 0.4 ? 1.0: 0.4;
      rotate = Math.random()
        < 0.8 ? (note/1200) : -(note/1200)
    }
})

note = 0.0
saturate = 0
rotate = (note/1200)
shape(() => (400))
  .color(0,30,241)
  .saturate(() => saturate)
  .scrollX(() => (30), 0.1)
  .scrollY(() => Math.sin((note/24) + 5),-0.1)
  .blend(o0, 0.99)
  .scale(1.01)
  .rotate(() =>  rotate)
  .out()

