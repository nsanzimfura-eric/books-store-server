/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Authenticate a user.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful.
 *                 data:
 *                   type: object
 *                   description: User authentication data.
 *       400:
 *         description: Authentication failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful.
 *                 message:
 *                   type: string
 *                   description: Error message.
 * /api/v1/auth/register/:
 *   post:
 *     summary: Register new User
 *     tags:
 *       - Auth
 *     parameters:
 *       - name: full_name
 *         in: body
 *         description: User's names.
 *         required: true
 *         schema:
 *           type: string
 *       - name: password
 *         in: body
 *         description: User's password.
 *         required: true
 *         schema:
 *           type: string
 *       - name: email
 *         in: body
 *         description: User's email.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Successfully registered a new user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     created_at:
 *                       type: string
 *                     updated_at:
 *                       type: string
 *                     deleted_at:
 *                       type: string
 *       400:
 *         description: Bad request. Indicates that the specified request is not valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 * /api/v1/auth/users:
 *   get:
 *     summary: Get all users in a store.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of users in the store.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       full_name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       points:
 *                         type: integer
 *                       orders:
 *                         type: array
 *                       createdAt:
 *                         type: date
 *                       updatedAt:
 *                         type: date
 *       404:
 *         description: Not found. Indicates that the specified project does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
