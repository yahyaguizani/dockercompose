#FROM python:3.8-slim

#WORKDIR /app

# Copier les fichiers requis
#COPY requirements.txt .
#COPY random_forest_model.pkl .
#COPY app.py .

# Installer les dépendances
#RUN pip install -r requirements.txt

# Exposer le port
#EXPOSE 8000

# Commande pour exécuter l'application
#CMD ["python", "app.py"]

# === Stage 1: Build (installer les dépendances) ===
FROM python:3.11-slim AS builder

WORKDIR /app

# Copier uniquement les fichiers nécessaires à l'installation
COPY requirements.txt .

# Installer les dépendances dans un dossier spécifique
RUN pip install --prefix=/install -r requirements.txt

# === Stage 2: Final ===
FROM python:3.11-slim

WORKDIR /app

# Copier les dépendances installées depuis le stage builder
COPY --from=builder /install /usr/local

# Copier seulement le code applicatif
COPY app.py .
COPY random_forest_model.pkl .

# Exposer le port
EXPOSE 8000

# Lancer l'application
CMD ["python", "app.py"]

