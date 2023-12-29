import { Request, Response } from 'express';
import { SuccessResponse } from '../helpers/response.helper';
import { OPEN_CAGE_API_KEY } from '../constants';
import opencage from 'opencage-api-client';

class LocationController {
  async getLocation(req: Request, res: Response) {
    // See our full nodejs tutorial:
    // https://opencagedata.com/tutorials/geocode-in-nodejs
    //
    // npm install opencage-api-client

    opencage
      .geocode({
        key: OPEN_CAGE_API_KEY,
        q: `${req.body.latitude}, ${req.body.longitude}`,
        language: 'en',
      })
      .then((data: any) => {
        console.log(JSON.stringify(data, null, 2));
        // { "components": { "house_number": "1330", "road": "Middle Avenue", "postcode": "94025", "town": ...
        if (data.status.code == 200 && data.results.length > 0) {
          console.log(data.results[0].formatted);
          return SuccessResponse(res, data.results[0].formatted);
          // "1330 Middle Avenue, Menlo Park, Californie 94025, États-Unis d'Amérique"
        }
      });

    opencage
      .geocode({ q: '3629 Yale Street, Vancouver, CA' })
      .then((data: any) => {
        console.log(data.results[0].geometry);
        // { "lat": 49.2909409, "lng": -123.024879 }
      })
      .catch((error: any) => {
        console.warn(error.message);
      });
  }
}

export const locationController = new LocationController(); // Instantiate your location service
