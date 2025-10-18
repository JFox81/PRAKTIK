Области хранения данных:

- база данных на json-server
- BBF
- редакс стор

Сущности приложения:

- пользователь: БД ( список пользователей), BFF (Сессия текущего), стор ( отображение в браузере)
- роль пользователя: БД (список пользователей с ролью), BFF ( Сессия пользователя с ролью), стор(Использование на клиенте)
- статья: БД (список статей), стор (отображение в браузере)
- Комментарий: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:

- Плдьзователи - user: id / login / Password / registed_at / role_id
- Роли - roles: id / name
- Статьи - posts: id / title / image_url / content / published_at
- Комментарии - comments: id/ author_id / post_id / content

Схема состояния на BFF:

- сессия текузего пользователя: login / password / role

Схема для редакс стора (на клиенте)

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: post: id / title / imageUrl / content/ publishedAt / comments: массив comment: id / author / content / publishedAT
- users: масив user: id / login / registredAt / role
