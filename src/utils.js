export function getCurrentDate() {
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  return `${cDay}-${cMonth}-${cYear}`;
}

export function getRandomTheme() {
  const list = [
    { background: "#b200b3", text: "#FFFFFF" },
    { background: "#b3006b", text: "#FFFFFF" },
    { background: "#001f99", text: "#FFFFFF" },
    { background: "#ffd6b2", text: "#000" },
    { background: "#ccffb2", text: "#000" },
    { background: "#b2e0ff", text: "#000" },
    { background: "#ffb2ff", text: "#000" },
  ];
  return list[Math.floor(Math.random() * list.length)];
}
