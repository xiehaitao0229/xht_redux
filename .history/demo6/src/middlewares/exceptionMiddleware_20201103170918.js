const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.error("错误报告: ", err);
  }
};

export default exceptionMiddleware;