class TaskPro {
  #taskList = [];
  #isRunning = false;
  #currentIndex = 0;
  #next = async () => {
    this.#currentIndex++;
    await this.#runTask();
  };
  addTask(task) {
    this.#taskList.push(task);
  }
  run() {
    if (this.#isRunning || !this.#taskList.length) return;

    this.#isRunning = true;
    this.#runTask();
  }

  async #runTask() {
    if (this._currentIndex >= this.#taskList.length) {
      this.#reset();
      return;
    }
    const i = this.#currentIndex;
    const task = this.#taskList[this.#currentIndex];
    // console.log('task', task);

    if (!task) {
      return;
    }

    await task(this.#next);
    const j = this.#currentIndex;

    // 如果没有手动调用next，就自动调用
    if (i === j) {
      await this.#next();
    }
  }

  #reset() {
    this.#taskList = [];
    this.#isRunning = false;
    this.#currentIndex = 0;
  }
}

const t = new TaskPro();

t.addTask(async (next) => {
  console.log(1, 'start');
  await next();
  console.log(1, 'end');
})

t.addTask(() => {
  console.log(2);
})

t.addTask(() => {
  console.log(3);
})

t.run(); // 1 start, 2, 3, 1 end