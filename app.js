'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  async beforeClose() {
    // Do some thing before app close.
    // 如果在进程关闭，通知其他进程删除该进程相关的relation
    this.app.messenger.sendToApp('process:exit', process.pid);
  }
}

module.exports = AppBootHook;
