/**
 * @swagger
 * /api/v1/auth/accounts/login:
 *   post:
 *     summary: Authenticate a user.
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
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
 * /api/v1/auth/accounts/register/user/:
 *   post:
 *     summary: Register new Institution User in a project, can be done by admin.
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: institution_id
 *         in: query
 *         description: The institution identifier.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: project_id
 *         in: query
 *         description: The Project's identifier.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: firstName
 *         in: body
 *         description: User's first name.
 *         required: true
 *         schema:
 *           type: string
 *       - name: lastName
 *         in: body
 *         description: User's last name.
 *         required: true
 *         schema:
 *           type: string
 *       - name: email
 *         in: body
 *         description: User's email.
 *         required: true
 *         schema:
 *           type: string
 *       - name: password
 *         in: body
 *         description: User's password.
 *         required: true
 *         schema:
 *           type: string
 *       - name: phone
 *         in: body
 *         description: User's phone number.
 *         required: false
 *         schema:
 *           type: string
 *       - name: image_url
 *         in: body
 *         description: User profile Image url.
 *         required: false
 *         schema:
 *           type: string
 * /api/v1/auth/accounts/register/:
 *   post:
 *     summary: Register a new admin in institution, can be done by super_admin or admin.
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: institution_id
 *         in: query
 *         description: The institution identifier.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: firstName
 *         in: body
 *         description: User's first name.
 *         required: true
 *         schema:
 *           type: string
 *       - name: lastName
 *         in: body
 *         description: User's last name.
 *         required: true
 *         schema:
 *           type: string
 *       - name: email
 *         in: body
 *         description: User's email.
 *         required: true
 *         schema:
 *           type: string
 *       - name: password
 *         in: body
 *         description: User's password.
 *         required: true
 *         schema:
 *           type: string
 *       - name: phone
 *         in: body
 *         description: User's phone number.
 *         required: false
 *         schema:
 *           type: string
 *       - name: image_url
 *         in: body
 *         description: User profile Image url.
 *         required: false
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
 *                     project_id:
 *                       type: integer
 *                     institution_id:
 *                       type: integer
 *                     is_active:
 *                       type: boolean
 *                     role:
 *                       type: string
 *                     created_at:
 *                       type: string
 *                     updated_at:
 *                       type: string
 *                     deleted_at:
 *                       type: string
 *       404:
 *         description: Not found. Indicates that the specified institution or project does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
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
 * /api/v1/auth/accounts/user/edit/{userId}:
 *   put:
 *     summary: Update a user's information.
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: The ID of the user to be updated.
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               image_url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated user information.
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
 *                     project_id:
 *                       type: integer
 *                     institution_id:
 *                       type: integer
 *                     is_active:
 *                       type: boolean
 *                     role:
 *                       type: string
 *                     created_at:
 *                       type: string
 *                     updated_at:
 *                       type: string
 *       404:
 *         description: Not found. Indicates that the specified user does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
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
 * /api/v1/auth/accounts/users/{project_id}:
 *   get:
 *     summary: Get all users in a project.
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: project_id
 *         in: path
 *         description: The ID of the project for which to retrieve users.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of users in the project.
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
 *                       firstName:
 *                         type: string
 *                       lastName:
 *                         type: string
 *                       email:
 *                         type: string
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
 *       401:
 *         description: Unauthorized. Indicates that the user is not authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 * /api/v1/auth/accounts/institution-admins:
 *   get:
 *     summary: Get all admins in one institution
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of users in the project.
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
 *                       firstName:
 *                         type: string
 *                       lastName:
 *                         type: string
 *                       email:
 *                         type: string
 *                       image_url:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       password:
 *                         type: string
 *                       project_id:
 *                         type: integer
 *                       institution_id:
 *                         type: integer
 *                       isActive:
 *                         type: boolean
 *                       role:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                       deletedAt:
 *                         type: string
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
 *       401:
 *         description: Unauthorized. Indicates that the user is not authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 * /api/v1/auth/accounts/admins:
 *   get:
 *     summary: Get all admins in the app, by super admin
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of users in the project.
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
 *                       firstName:
 *                         type: string
 *                       lastName:
 *                         type: string
 *                       email:
 *                         type: string
 *                       image_url:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       password:
 *                         type: string
 *                       project_id:
 *                         type: integer
 *                       institution_id:
 *                         type: integer
 *                       isActive:
 *                         type: boolean
 *                       role:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                       deletedAt:
 *                         type: string
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
 *       401:
 *         description: Unauthorized. Indicates that the user is not authenticated.
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
