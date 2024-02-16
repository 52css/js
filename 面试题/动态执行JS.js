function exec(code) {
  // eval: 同步， 当前作用域
  // eval(code);
  // new Function: 同步，全局作用域
  // new Function(code)();
  // setTimeout: 异步，全局作用域
  // setTimeout(code, 0);
  // script: 同步，全局作用域
  const script = document.createElement('script');
  script.innerHTML = code;
  document.body.appendChild(script);
}

exec(`console.log('hello world')`);