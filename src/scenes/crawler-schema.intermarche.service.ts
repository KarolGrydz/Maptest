import { CrawlerSchemaAbstractService } from '../crawler-schema.abstract.service';
import { CrawlerResponse, ShopName } from '@util/model/main.model';
import { ShopDto } from '@module/shops';
import { Logger } from '@nestjs/common';
import { processAddressString } from '../../utils/string.utils';
import { ScraperFetchTool } from '../../scraper/scraper.model';

interface IntermarcheShopRawData {
    id: number,
    uid: string,
    number: string,
    street: string,
    lat: number,
    lng: number,
    city: string,
    zip: string,
    phone: string,
    email: string,
    open_mon_fri: string,
    open_sat: string,
    open_sun: string,
    wash: string,
    service: string,
    drive: string,
    petrol: string,
    bricomarche: string,
    www: string,
}

export class CrawlerSchemaIntermarcheService extends CrawlerSchemaAbstractService {
    protected logger = new Logger('CrawlerSchemaIntermarcheService');
    protected shopName = ShopName.INTERMARCHE;
    protected startURL = 'https://intermarche.pl/wp-content/themes/intermarche/json/markers.json';

    public async initProcess(): Promise<CrawlerResponse> {
        const json = ((await this.scraperService.fetchSite(
            this.startURL,
            ScraperFetchTool.AXIOS,
        )) as unknown) as IntermarcheShopRawData[];

        const crawledData: ShopDto[] = await this.handlePageFunction(json);
        return this.saveDataAndGetResponse(crawledData);
    }

    protected handlePageFunction(storeShops: IntermarcheShopRawData[]): ShopDto[] {
        try {
            return storeShops.map((cShop) => this.extractShopDataFromJson(cShop));
        } catch (e) {
            this.logger.error(e.toString());
            return [];
        }
    }

    private extractShopDataFromJson(shopRaw: IntermarcheShopRawData): ShopDto {
        const shopData = new ShopDto();
        shopData.shop = this.shopName;
        shopData.openHour = {} as any;
        shopData.address = processAddressString(shopRaw.street);
        shopData.postCode = shopRaw.zip;
        shopData.city = processAddressString(shopRaw.city.toUpperCase());

        shopData.openHour.mon = shopRaw.open_mon_fri;
        shopData.openHour.tue = shopRaw.open_mon_fri;
        shopData.openHour.wed = shopRaw.open_mon_fri;
        shopData.openHour.thu = shopRaw.open_mon_fri;
        shopData.openHour.fri = shopRaw.open_mon_fri;
        shopData.openHour.sat = shopRaw.open_sat;
        shopData.openHour.sun = shopRaw.open_sun;

        return shopData;
    }
}