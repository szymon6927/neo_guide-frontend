import { TokenService } from './token.service';
import { neoGuideAuthenticatedAPI } from '../clients/api.authenticated.client';


export default class PsalmsService {
  static async getAllPsalms() {
    const psalmsURL = 'psalms/';
    const header = TokenService.getAuthenticationHeader();

    try {
      const response = await neoGuideAuthenticatedAPI.get(psalmsURL, header);
      return response.data.results;
    } catch (e) {
      console.error(`PsalmService.getAllPsalms() - ${e}`);

      if (e.response.status === 401) {
        return null;
      }

      return [];
    }
  }

  static async getPsalm(psalmID) {
    const psalmDetailURL = `psalms/${psalmID}/`;
    const header = TokenService.getAuthenticationHeader();

    try {
      const response = await neoGuideAuthenticatedAPI.get(psalmDetailURL, header);
      return response.data;
    } catch (e) {
      console.error(`PsalmService.getPsalm() - ${e}`);

      if (e.response.status === 401) {
        return null;
      }

      return {};
    }
  }

  static async getFilteredPsalms(filterValues) {
    let url = `psalms/?search=${filterValues.searchText}`;
    const header = TokenService.getAuthenticationHeader();

    if (filterValues.searchCardColor !== '') {
      url += `&card_color=${filterValues.searchCardColor}`;
    }

    if (filterValues.searchSorting !== '') {
      url += `&ordering=${filterValues.searchSorting}`;
    }

    try {
      const response = await neoGuideAuthenticatedAPI.get(url, header);
      return response.data.results;
    } catch (e) {
      console.error(`PsalmService.getFilteredPsalms() - ${e}`);

      if (e.response.status === 401) {
        return null;
      }

      return [];
    }
  }
}
