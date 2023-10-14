type Watcher<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Change`,
    callback: (oldValue: T[K], newValue: T[K]) => void
  ): void;
};

declare function watch<T>(obj: T): Watcher<T>;

const personWatcher = watch({
  firstName: "Bruce",
  lastName: "Wayne",
  age: 42,
});

personWatcher.on("ageChange", (oldValue, newValue) => {});