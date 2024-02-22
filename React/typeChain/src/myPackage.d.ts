// d.ts = Declaration Files 정의 파일
// 자바스크립트 패키지를 쓸 때 모든 것에 대한 타입을 이해시킨다.
interface config {
  url: string;
}
declare module "myPackage" {
  function init(config: config): boolean;
  function exit(code: number): number;
}
