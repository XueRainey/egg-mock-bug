'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async serverDidReady() {
    this.app.server.on('upgrade');
  }
}

module.exports = AppBootHook;
