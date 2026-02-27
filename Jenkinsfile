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
    }
}