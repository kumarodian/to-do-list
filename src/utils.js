export function getCurrentDate() {
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  return `${cDay}-${cMonth}-${cYear}`;
}

export function getRandomTheme() {
  const list = [
    { background: "#3A2C85", text: "#FFFFFF" },
    { background: "#DF3435", text: "#FFFFFF" },
    { background: "#99907D", text: "#FFFFFF" },
    { background: "#B5BA72", text: "#000" },
    { background: "#47A8BD", text: "#ffffff" },
    { background: "#87BFFF", text: "#000" },
    { background: "#E07BE0", text: "#000" },
    { background: "#F7B32B", text: "#000" },
    { background: "#A9E5BB", text: "#000" },
    { background: "#49D49D", text: "#000" },
    { background: "#AB92BF", text: "#ffffff" },
    { background: "#214E34", text: "#ffffff" },
    { background: "#508AA8", text: "#ffffff" },
    { background: "#1789FC", text: "#ffffff" },
    { background: "#48E5C2", text: "#000" },
  ];
  return list[Math.floor(Math.random() * list.length)];
}
