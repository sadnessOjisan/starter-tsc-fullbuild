import { isIOSSafari } from "../ua";

let uaGetter = jest.spyOn(window.navigator, "userAgent", "get");

afterEach(() => {
  uaGetter.mockRestore();
});
uaGetter.mockReturnValue("AAbbbbbAAAAA");

describe("ユーザーエージェントのテスト", () => {
  // test.each([
  //   [
  //     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
  //     false
  //   ],
  //   [
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100",
  //     false
  //   ],
  //   [
  //     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:68.0) Gecko/20100101 Firefox/68.0",
  //     false
  //   ],
  //   [
  //     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15",
  //     true
  //   ],
  //   [
  //     "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
  //     true
  //   ]
  // ])("%sのとき、%pを返す", (ua, expected) => {
  //   uaGetter.mockReturnValue(ua);
  //   import("../ua").then(module => {
  //     const result = module.isIOSSafari();
  //     expect(result).toBe(expected);
  //   });
  //   // const result = isIOSSafari();
  //   // expect(result).toBe(expected);
  // });

  test("aa", () => {
    import("../ua").then(module => {
      const result = module.isIOSSafari();
      expect(result).toBe(true);
    });
    uaGetter.mockClear();
    // const result = isIOSSafari();
    // expect(result).toBe(true);
    jest.resetModules();
  });

  test("bbb", () => {
    jest.resetModules();
    uaGetter.mockReturnValue("ccccccc");
    // import("../ua").then(module => {
    //   uaGetter.mockReturnValue("ccccccc");
    //   const result = module.isIOSSafari();
    //   expect(result).toBe(true);
    // });
    const result = isIOSSafari();
    expect(result).toBe(true);
  });
});
