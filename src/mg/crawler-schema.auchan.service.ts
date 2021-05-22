import { CrawlerSchemaAbstractService } from '../crawler-schema.abstract.service';
import { CrawlerResponse, ShopName } from '@util/model/main.model';
import { ShopDto } from '@module/shops';
import { Logger } from '@nestjs/common';
import { ScraperFetchTool } from '../../scraper/scraper.model';
import {mockAuchanApiJsonResponse} from '../../../mocks/auchan.mock'

export interface AuchanImagesRawData {
  largeBanner: {
    large: {
      url: string,
      alt: string,
      webp: string,
    },
    desktop: {
      url: string,
      alt: string,
      webp: string,
    },
    tablet: {
      url: string,
      alt: string,
      webp: string,
    },
    mobile: {
      url: string,
      alt: string,
      webp: string,
    },
  },
  banner: {
    large: {
      url: string,
      alt: string,
    },
    desktop: {
      url: string,
      alt: string,
    },
    tablet: {
      url: string,
      alt: string,
    },
    mobile: {
      url: string,
      alt: string,
    },
    type: string,
    json: boolean,
  },
}

export interface AuchanContactRawData {
    email: string,
    isEmailDisplayed: boolean,
    fax: string,
    description: string,
    socialNetworks: {facebook: string, twitter: string, instagram: string, youtube: string},
    phone: string,
}

export interface AuchanAdressRawData {
    address: string,
    postalCode: string,
    city: string,
    region: string,
    country: string,
    latitude: string,
    longitude: string,
}

export interface AuchanOpeningHoursRawData {
    date: string,
    isOpen: boolean,
    isOpenAllDay: boolean,
    hours: [start: string, end: string],
}

export interface AuchanOpeningHoursResponse {
    [key: string]: AuchanOpeningHoursRawData;
}

export interface AuchanResponseRawData {
    CMSID: number,
    id: string,
    mdmId: string,
    name: string,
    pageName: string,
    externalUrl: string,
    groupOfStores: [string, string, string,],
    openingHours: AuchanOpeningHoursResponse,
    specialOpeningHours: [],
    restaurants: [],
    pos: [],
    services: [],
    deliveryServices: [],
    features: [],
    type: string,
    status: string,
    address: AuchanAdressRawData,
    contact: AuchanContactRawData,
    productCatalogID: string,
    transport: {
      parking: {
        slots: string,
        disabledSlots: string,
        electricSlots: string
      },
      transports: {
        publicTransportURL: boolean, 
        bike: {transportURL: string, stations: boolean},
        tram: boolean,
        bus: boolean
      },
    },
    gasStation: boolean,
    gallery: boolean,
    images: AuchanImagesRawData,
    deliveryAreas: {include: [], exclude: []},
    metaInformation: {title: string, description: string, image: null, nofollow: boolean},
    parent: {title: string, urlFriendlyName: null, parent: [], section: null},
    customCSS: string,
    customJS: null,
    socialSharing: null,
    expiration: {date: string, options: string},
}

export class CrawlerSchemaAuchanService extends CrawlerSchemaAbstractService {
  protected logger = new Logger('CrawlerSchemaAuchanService');
  protected shopName = ShopName.AUCHAN;
  protected startURL = 'https://sklepygama.pl/map_data/';

  public async initProcess(): Promise<CrawlerResponse> {
    // const json = ((await this.scraperService.fetchSite(
    //   this.startURL,
    //   ScraperFetchTool.AXIOS,
    // )) as unknown) as AuchanResponseRawData;
    const json: AuchanResponseRawData = mockAuchanApiJsonResponse;

    const crawledData: ShopDto[] = await this.handlePageFunction(
      Object.values(json),
    );
    return this.saveDataAndGetResponse(crawledData);
  }

  protected handlePageFunction(storeShops: AuchanResponseRawData[]): ShopDto[] {
    try {
      return storeShops.map((cShop) => this.extractShopDataFromJson(cShop));
    } catch (e) {
      this.logger.error(e.toString());
      return [];
    }
  }

  private extractShopDataFromJson(shopRaw: AuchanResponseRawData): ShopDto {
    const shopData = new ShopDto();
    shopData.shop = this.shopName;
    shopData.openHour = {} as any;
    shopData.address = shopRaw.address.address;
    shopData.postCode = shopRaw.kod_pocztowy;
    shopData.city = shopRaw.miasto.toUpperCase();

    shopData.openHour.mon = shopRaw.pon_pt;
    shopData.openHour.tue = shopRaw.pon_pt;
    shopData.openHour.wed = shopRaw.pon_pt;
    shopData.openHour.thu = shopRaw.pon_pt;
    shopData.openHour.fri = shopRaw.pon_pt;
    shopData.openHour.sat = shopRaw.sob;
    shopData.openHour.sun = shopRaw.nd;

    return shopData;
  }
}
