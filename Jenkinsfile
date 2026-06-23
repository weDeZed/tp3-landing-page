pipeline {
    agent any
    stages {
        stage('Build API Image') {
            steps {
                echo 'Construction de l\'image NodeJS...'
                sh 'docker build -t wedezed/nodejs-api-tp3:latest .'
            }
        }
        stage('Deploy API Local') {
            steps {
                echo 'Déploiement de l\'API sur le port 3000...'
                sh '''
                docker stop nodejs-api || true
                docker rm nodejs-api || true
                docker run -d --name nodejs-api -p 3000:3000 wedezed/nodejs-api-tp3:latest
                '''
            }
        }
    }
}
