class Keyboard {
  constructor(name, price, cnt, imgs) {
    this.name = name;
    this.price = price;
    this.cnt = cnt;
    this.imgs = imgs;
  }
}
export default [
  new Keyboard("바밀로-고래", 300, 0, "./asset/바밀로-고래.jpg"),
  new Keyboard("바밀로-매화(tenkeyless)", 256, 0, "./asset/바밀로-매화.jpg"),
  new Keyboard("바밀로-코이", 1024, 0, "./asset/바밀로-코이.jpg"),
];
