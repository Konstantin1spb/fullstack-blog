Области хранения данных:

1. БД
2. BFF (backend for frontend)
3. редакс стор

Сущности приложения:

1. Пользователь: БД (список пользователей), BFF (сессия текущего пользователя), редакс (отображение в браузере)
2. Роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), редакс (использование на клиенте)
3. Статья: БД (список статей), редакс (отображение в браузере)
4. Комментарии: БД (список комментариев), редакс (отображение в браузере)

Таблицы БД:

1. Пользователи - users: id / login / password / registered_at / role_id
2. Роли - roles: id / name
3. Статьи - posts: id / title / image_url / content / published_at
4. Комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

1. Сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

1. user: id / login / roleId / session
2. posts (список статей): массив post: id / title / imageUrl / publishedAt / commentsCount
3. post (статья): id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
4. users: массив user: id / login / role / registeredAt
