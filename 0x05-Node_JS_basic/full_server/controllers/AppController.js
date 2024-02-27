module.exports = class AppController {
  static getHomepage(request, response) {
    return { status: 200, message: 'Hello Holberton School!' };
  }
};
