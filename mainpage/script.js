class Keyboard {
  constructor(name, chuk, cnt, imgs, info) {
    this.name = name;
    this.chuk = chuk;
    this.cnt = cnt;
    this.imgs = imgs;
    this.infoimg = info;
  }
}
export default [
  new Keyboard(
    "바밀로-고래",
    "기계식",
    0,
    "./asset/바밀로-고래.jpg",
    "./asset/바밀로-고래-상세.png"
  ),
  new Keyboard(
    "바밀로-매화",
    "기계식",
    0,
    "./asset/바밀로-매화.jpg",
    "./asset/바밀로-매화-상세.jpg"
  ),
  new Keyboard(
    "바밀로-코이",
    "기계식",
    0,
    "./asset/바밀로-코이.jpg",
    "./asset/바밀로-코이-상세.jpg"
  ),
  new Keyboard(
    "바밀로-꿈나비",
    "기계식",
    0,
    "./asset/바밀로-꿈나비.jpg",
    "./asset/바밀로-꿈나비-상세.jpg"
  ),
];
