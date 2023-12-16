function cyberReindeer(road: string, time: number): string[] {
  let road_status_log: string[] = [];
  let position: number = 0;
  let roadArr: string[] = road.replaceAll("S", ".").split("");

  for (let i = 0; i < time; i++) {
    let new_road_status: string[] = [...roadArr];
    let nextChar: string = roadArr[position + 1];

    if (i < 5) {
      if (nextChar === "|") {
        position === position;
        new_road_status[position] = "S";
      } else {
        new_road_status[position] = "S";
        position++;
      }
    } else if (i === 5) {
      new_road_status = roadArr.map((x) => x.replace("|", "*"));
      position++;
      new_road_status[position] = "S";
    } else if (i > 5) {
      new_road_status = roadArr.map((x) => x.replace("|", "*"));
      position++;
      new_road_status[position] = "S";
    }

    let new_road_status_string: string = new_road_status.join("");
    road_status_log.push(new_road_status_string);
  }
  return road_status_log;
}