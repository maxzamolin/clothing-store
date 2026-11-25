# ===== Этап 1: сборка React-приложения =====
FROM node:22-alpine AS builder

WORKDIR /app

# Сначала копируем только файлы зависимостей, чтобы использовать кэш слоёв Docker
COPY package.json package-lock.json ./

RUN npm install -g npm@11

# Устанавливаем зависимости (npm ci быстрее и надёжнее, чем npm install)
RUN npm ci

# Копируем весь код и собираем
COPY . .
RUN npm run build

# ===== Этап 2: раздача статических файлов через Nginx =====
FROM nginx:alpine AS runner

# Копируем собранные статические файлы в директорию Nginx по умолчанию
COPY --from=builder /app/build /usr/share/nginx/html

# Копируем пользовательскую конфигурацию Nginx (для поддержки маршрутизации SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]