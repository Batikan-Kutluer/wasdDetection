let keysDown = {
  w: false,
  s: false,
  a: false,
  d: false,
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keysDown.w = true;
      break;
    case "s":
      keysDown.s = true;
      break;
    case "a":
      keysDown.a = true;
      break;
    case "d":
      keysDown.d = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keysDown.w = false;
      break;
    case "s":
      keysDown.s = false;
      break;
    case "a":
      keysDown.a = false;
      break;
    case "d":
      keysDown.d = false;
      break;
  }
});
