import { init, exit } from "myPackage";

init({
  url: "true",
});
exit(1);

// 타입스크립트가 localStorage를 아는 방식
// localStorage.clear() ctrl을 눌러 들어가면 타입스크립트가 lib.dom.d.ts의 주석을 읽어준다.
