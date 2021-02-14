export default class ThingsService {
  _baseUrl = 'https://glacial-plateau-04273.herokuapp.com/api/v1/things';

  getAllThings = async function () {
    const response = await fetch(this._baseUrl);

    return response.json();
  }

  addThing = async function (thing) {
    await fetch(`${this._baseUrl}`, {
      method: 'POST',
      body: JSON.stringify(thing)
    });
  }

  deleteThing = async function (id) {
    await fetch(`${this._baseUrl}/${id}`, { method: 'DELETE' });
  }

  updateThing = async function (id, thing) {
    await fetch(`${this._baseUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(thing)
    });
  }
}
