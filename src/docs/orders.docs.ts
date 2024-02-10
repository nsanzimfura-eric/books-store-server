/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *     summary: Place an order for one or more books.
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     book_id:
 *                       type: string
 *                       description: The unique identifier for the book.
 *                       example: "5a190431-139e-484b-8f2a-b17c76e0eed2"
 *                     quantity:
 *                       type: integer
 *                       description: The quantity of the book to order.
 *                       example: 2
 *     responses:
 *       200:
 *         description: Order placed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       book_id:
 *                         type: string
 *                         example: "5a190431-139e-484b-8f2a-b17c76e0eed2"
 *                       user_id:
 *                         type: string
 *                         example: "bfbbd510-674d-48e1-a5dc-797cb494a65c"
 *                       quantity:
 *                         type: integer
 *                         example: 2
 *                       id:
 *                         type: string
 *                         example: "35ff89ff-2eca-484f-9190-0ccc7b814bd4"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-09T22:00:31.373Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-09T22:00:31.373Z"
 *       400:
 *         description: Bad request. Possibly incorrect request body format.
 *       500:
 *         description: Internal server error.
 *   get:
 *     summary: Retrieve orders placed by a specific user.
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of orders placed by the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "9c307c6f-4624-46bf-b139-bd83f82a994b"
 *                       book_id:
 *                         type: string
 *                         example: "c7da396f-7f56-4ffd-bce4-1c122f9f063e"
 *                       user_id:
 *                         type: string
 *                         example: "f014b4d2-60cf-4aa5-b65f-2ded95ee09f6"
 *                       quantity:
 *                         type: integer
 *                         example: 1
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-09T16:41:06.780Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-09T16:41:06.780Z"
 *                       book:
 *                         type: array
 *                         items:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                               title:
 *                                 type: string
 *                               writer:
 *                                 type: string
 *                               tags:
 *                                 type: string
 *                               points:
 *                                 type: integer
 *                               cover_image:
 *                                 type: string
 *                               createdAt:
 *                                 type: string
 *                                 format: date-time
 *                               updatedAt:
 *                                 type: string
 *                                 format: date-time
 *                         example:
 *                           -
 *                             - id: "c7da396f-7f56-4ffd-bce4-1c122f9f063e"
 *                               title: "The Black Book"
 *                               writer: "Orhan Pamuk"
 *                               tags: "non-fiction"
 *                               points: 10
 *                               cover_image: "http://books.google.com/books/content?id=EnCBAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
 *                               createdAt: "2024-02-08T09:02:17.053Z"
 *                               updatedAt: "2024-02-08T09:02:17.053Z"
 *       400:
 *         description: Bad request. Possibly incorrect query parameters.
 *       500:
 *         description: Internal server error.
 *   delete:
 *     summary: Cancel an existing order.
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Order successfully canceled.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     raw:
 *                       type: array
 *                       description: Detailed response from the database operation, might be empty.
 *                       example: []
 *                     affected:
 *                       type: integer
 *                       description: Number of records affected by the delete operation.
 *                       example: 5
 *       401:
 *         description: Unauthorized. Bearer token missing or invalid.
 *       500:
 *         description: Internal server error.
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
