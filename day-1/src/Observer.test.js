const { Observable } = require("./Observer");

describe("Observable", () => {
  let observable;
  let observer1;
  let observer2;

  beforeEach(() => {
    observable = new Observable();
    observer1 = jest.fn();
    observer2 = jest.fn();
  });

  test("subscribe and notify observers", () => {
    observable.subscribe(observer1);
    observable.subscribe(observer2);

    observable.notify("Test");

    expect(observer1).toHaveBeenCalledWith("Test");
    expect(observer2).toHaveBeenCalledWith("Test");
  });

  test("unsubscribe observer", () => {
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.unsubscribe(observer1);

    observable.notify("Test Unsubscribe");

    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).toHaveBeenCalledWith("Test Unsubscribe");
  });

  test("no observers should be notified", () => {
    observable.notify("No Observers");
    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).not.toHaveBeenCalled();
  });
});
