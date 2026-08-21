pipeline {
    agent any

    environment {
        IMAGE_NAME = 'imrat67/ihsaikat-portfolio'
        IMAGE_TAG  = 'latest'
    }

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t ihsaikat-portfolio:build .'
            }
        }

        stage('Tag') {
            steps {
                sh 'docker tag ihsaikat-portfolio:build ${IMAGE_NAME}:${IMAGE_TAG}'
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            --username "$DOCKER_USERNAME" \
                            --password-stdin
                    '''
                }
            }
        }

        stage('Push') {
            steps {
                sh 'docker push ${IMAGE_NAME}:${IMAGE_TAG}'
            }
        }
    }
}
