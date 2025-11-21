#FROM python:3.11-slim
#WORKDIR /app
#COPY requirements.txt .
#RUN pip install -r requirements.txt
#COPY . .
#CMD ["python", "app.py"]

# Stage 1: build
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --prefix=/install -r requirements.txt
COPY . .

# Stage 2: final
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /install /usr/local
COPY --from=builder /app .
CMD ["python", "app.py"]

