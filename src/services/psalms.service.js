import { TokenService } from './token.service';
import { neoGuideAuthenticatedAPI } from '../clients/api.authenticated.client';


export default class PsalmsService {
  static async getAllPsalms() {
    const psalmsURL = 'psalms/';

    try {
      const response = await neoGuideAuthenticatedAPI.get(
        psalmsURL,
        TokenService.getAuthentication(),
      );
      return response.data.results;
    } catch (e) {
      console.error(`PsalmService.getAllPsalms() - ${e}`);
      return null;
    }
  }

  static async getPsalm(psalmID) {
    const psalmDetailURL = `psalms/${psalmID}/`;

    try {
      const response = await neoGuideAuthenticatedAPI.get(
        psalmDetailURL,
        TokenService.getAuthentication(),
      );
      return response.data;
    } catch (e) {
      console.error(`PsalmService.getPsalm() - ${e}`);
      return null;
    }
  }

  static async getFilteredPsalms(filterValues) {
    let url = `psalms/?search=${filterValues.psalmsSearchValue}`;

    if (filterValues.psalmsSearchCardColorValue !== '') {
      url += `&card_color=${filterValues.psalmsSearchCardColorValue}`;
    }

    if (filterValues.psalmsSearchSortingValue !== '') {
      url += `&ordering=${filterValues.psalmsSearchSortingValue}`;
    }

    try {
      const response = await neoGuideAuthenticatedAPI.get(
        url,
        TokenService.getAuthentication(),
      );
      return response.data;
    } catch (e) {
      console.error(`PsalmService.getFilteredPsalms() - ${e}`);
      return null;
    }
  }
}
