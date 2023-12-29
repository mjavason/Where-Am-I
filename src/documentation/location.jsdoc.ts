/**
 * @swagger
 * tags:
 *   - name: Location
 *     description: Endpoints for location information
 */

/**
 * @swagger
 * paths:
 *   /location:
 *     post:
 *       summary: Get Location
 *       description: |
 *         Endpoint to get location information.
 *       tags:
 *         - Location
 *       requestBody:
 *         description: Location data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LocationDto'
 *       responses:
 *         200:
 *           description: Successfully retrieved location
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   latitude:
 *                     type: number
 *                     description: The latitude of the location
 *                   longitude:
 *                     type: number
 *                     description: The longitude of the location
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 *                     example: Invalid input parameters
 *         500:
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 *                     example: Internal Server Error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LocationDto:
 *       type: object
 *       properties:
 *         latitude:
 *           type: number
 *           description: The latitude of the location
 *         longitude:
 *           type: number
 *           description: The longitude of the location
 *       required:
 *         - latitude
 *         - longitude
 */
