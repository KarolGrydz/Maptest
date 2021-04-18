import { CrawlerSchemaAbstractService } from '../crawler-schema.abstract.service';
import { CrawlerResponse, ShopName } from '@util/model/main.model';
import { ShopDto } from '@module/shops';
import { Logger } from '@nestjs/common';
import { processAddressString } from '../../utils/string.utils';
import { ScraperFetchTool } from '../../scraper/scraper.model';

interface DealzShopRawData {
    location: string,
    address: string,
    sortord: number,
    latitude: string,
    longitude: string,
    description: string,
    website: string,
    exturl: string,
    operatingHours: string,
    embedvideo: string,
    defaultmedia: string,
    telephone: string,
    fax: string,
    email: string,
    country: string,
    contactus: string,
    category: [],
    productsServices: string,
    storeId: string,
    storeimage: string,
    custmmarker: string,
    storeRat: string,
    storeTotalRat: string,
}

export class CrawlerSchemaDealzService extends CrawlerSchemaAbstractService {
    protected logger = new Logger('CrawlerSchemaDealzService');
    protected shopName = ShopName.DEALZ;
    protected startURL = 'https://dealz.pl/wp-content/uploads/ssf-wp-uploads/ssf-data.json';

    public async initProcess(): Promise<CrawlerResponse> {
        const json = ((await this.scraperService.fetchSite(
            this.startURL,
            ScraperFetchTool.AXIOS,
        )) as unknown) as DealzShopRawData[];

        const crawledData: ShopDto[] = await this.handlePageFunction(json);
        return this.saveDataAndGetResponse(crawledData);
    }

    protected handlePageFunction(storeShops: DealzShopRawData[]): ShopDto[] {
        try {
            return storeShops.map((cShop) => this.extractShopDataFromJson(cShop));
        } catch (e) {
            this.logger.error(e.toString());
            return [];
        }
    }

    private extractShopDataFromJson(shopRaw: DealzShopRawData): ShopDto {
        const shopData = new ShopDto();
        shopData.shop = this.shopName;
        shopData.openHour = {} as any;
        shopData.address = getStreet(encodeUTF(shopRaw.address));
        shopData.postCode = getZIPCode(encodeUTF(shopRaw.address));
        shopData.city = getCity(encodeUTF(shopRaw.location)).toUpperCase();

        function encodeUTF(text) {
            return text.replace('\u0142', 'ł')
                .replace('\u017C', 'ż')
                .replace('\u017B', 'Ż')
                .replace('\u0141', 'Ł')
                .replace('\u015B', 'ś')
                .replace('\u015A', 'Ś')
                .replace('\u0107', 'ć')
                .replace('\u00F3', 'ó')
                .replace('\u017A', 'ź')
                .replace('\u0179', 'Ź');
        }

        function getCity(city: string): string {
            return city.slice(city.search('Dealz') + 7, city.search('<br>'));
          }
          
          function getZIPCode(zip: string): string {
            const start:number = zip.length;
            return zip.slice(start - 7, start);
          }
          
          function getStreet(street: string): string {
            const whiteSpaceOne = street.indexOf(" ");
            const whiteSpaceTwo = street.indexOf(" ", whiteSpaceOne + 1);
            return street.slice(whiteSpaceOne + 1, whiteSpaceTwo + 3);
          }

          
function MonToFrHours(date: string): string {
    return date.slice(date.search('Pi') + 8, date.search('<br>'));
  }
  
  function SatHours(date: string): string {
    return date.slice(date.search('Sobota') + 8, date.search('Niedziela') - 5);
  }

        shopData.openHour.mon = MonToFrHours(encodeUTF(shopRaw.description));
        shopData.openHour.tue = MonToFrHours(encodeUTF(shopRaw.description));
        shopData.openHour.wed = MonToFrHours(encodeUTF(shopRaw.description));
        shopData.openHour.thu = MonToFrHours(encodeUTF(shopRaw.description));
        shopData.openHour.fri = MonToFrHours(encodeUTF(shopRaw.description));
        shopData.openHour.sat = SatHours(encodeUTF(shopRaw.description));
        shopData.openHour.sun = null;

        return shopData;
    }
}