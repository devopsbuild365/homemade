pipeline {
    agent {
        docker {
            image 'node:20-alpine'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    export HOME=$WORKSPACE
                    node --version
                    npm --version
                    npm ci
                    npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                    export HOME=$WORKSPACE
                    npm run test
                '''
            }            
        }
    }

    post {
        always {
            // Publiceer JUnit test resultaten
            junit testResultsPattern: 'test-results/junit.xml'
        }
    }
}