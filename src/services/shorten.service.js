import http from "#/helpers/http-common";

class ShortenService {
  async shortenLink(url) {
    const response = await http.post(
      `url/shorten`,
      { originalUrl: url },
      { timeout: 90000 },
    );
    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    return response.data;
  }

  async getUrl(shortCode) {
    const response = await http.get(`url/${shortCode}`, { timeout: 90000 });
    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    return response.data;
  }
}

export default new ShortenService();
