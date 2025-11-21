#FROM node:20
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#CMD ["npm", "start"]

# === Stage 1: Builder ===
FROM node:20-alpine AS builder

WORKDIR /app

# Copier seulement package.json pour installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Construire l'application (React, Vue, etc.)
RUN npm run build

# === Stage 2: Final ===
FROM node:20-alpine

WORKDIR /app

# Copier les fichiers build du stage builder
COPY --from=builder /app/build ./build

# Copier package.json si nécessaire pour npm start
COPY package*.json ./

# Installer uniquement les dépendances de prod si besoin
RUN npm install --production

# Lancer l'application
CMD ["npm", "start"]

