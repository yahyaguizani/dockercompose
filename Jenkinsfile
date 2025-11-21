pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/yahyaguizani/dockercompose.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh '''
                        echo "🔧 Building auth-backend..."
                        docker build -t auth-backend ./projet/auth-microservice/backend

                        echo "🔧 Building auth-frontend..."
                        docker build -t auth-frontend ./projet/auth-microservice/frontend

                        echo "🔧 Building heart-backend..."
                        docker build -t heart-backend ./projet/heart-predictor/backend

                        echo "🔧 Building heart-frontend..."
                        docker build -t heart-frontend ./projet/heart-predictor/frontend
                    '''
                }
            }
        }

        stage('Stop Existing Containers') {
            steps {
                sh '''
                    docker-compose -f ./projet/docker-compose.yml down || true
                '''
            }
        }

        stage('Start New Containers') {
            steps {
                sh '''
                    docker-compose -f ./projet/docker-compose.yml up -d --build --force-recreate

                '''
            }
        }
    }
}
