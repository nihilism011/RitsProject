class Keyboard {
  constructor(name, price, cnt, imgs, info) {
    this.name = name;
    this.price = price;
    this.cnt = cnt;
    this.imgs = imgs;
    this.infoimg = info;
  }
}
export default [
  new Keyboard(
    "바밀로-고래",
    300,
    0,
    "./asset/바밀로-고래.jpg",
    "./asset/바밀로-고래-상세.png"
  ),
  new Keyboard(
    "바밀로-매화(tenkeyless)",
    256,
    0,
    "./asset/바밀로-매화.jpg",
    "./asset/바밀로-매화-상세.jpg"
  ),
  new Keyboard(
    "바밀로-코이",
    1024,
    0,
    "./asset/바밀로-코이.jpg",
    "./asset/바밀로-코이-상세.jpg"
  ),
];
