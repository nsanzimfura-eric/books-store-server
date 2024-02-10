/**
 * @swagger
 * /api/v1/books/more:
 *   post:
 *     summary: Add multiple books to the store.
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               books:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Title of the book.
 *                     writer:
 *                       type: string
 *                       description: Author of the book.
 *                     cover_image:
 *                       type: string
 *                       format: uri
 *                       description: URL to the cover image of the book.
 *                     tags:
 *                       type: string
 *                       description: Comma-separated tags for the book.
 *                     points:
 *                       type: integer
 *                       description: Points associated with the book.
 *     responses:
 *       200:
 *         description: Books successfully added to the store.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the books were successfully added.
 *                 message:
 *                   type: string
 *                   description: Success message.
 *       400:
 *         description: Bad request. Indicates that the request payload is not valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   description: Error message detailing what went wrong.
 * /api/v1/books:
 *   get:
 *     summary: Get all books from the store.
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: A list of books.
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
 *                         example: "bd902e3a-4686-4f16-b376-3d4be0f1a5fe"
 *                       title:
 *                         type: string
 *                         example: "Taras Bulba"
 *                       writer:
 *                         type: string
 *                         example: "Nikolái V. Gogol"
 *                       tags:
 *                         type: string
 *                         example: "fiction,science"
 *                       points:
 *                         type: integer
 *                         example: 13
 *                       cover_image:
 *                         type: string
 *                         example: "http://books.google.com/books/content?id=XdMBTKWSfeMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-08T09:02:13.013Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-02-08T09:02:13.013Z"
 *       500:
 *         description: Internal server error
 */
