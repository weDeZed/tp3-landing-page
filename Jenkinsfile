pipeline {
    agent any
    stages {
        stage('Build Image') {
            steps {
                echo 'Construction de la nouvelle image Docker...'
                sh 'docker build -t wedezed/landing-page-tp3:latest .'
            }
        }
        stage('Deploy Local') {
            steps {
                echo 'Déploiement direct sur le serveur AWS...'
                sh '''
                docker stop landing-page || true
                docker rm landing-page || true
                docker run -d --name landing-page -p 80:80 wedezed/landing-page-tp3:latest
                '''
            }
        }
    }
}
