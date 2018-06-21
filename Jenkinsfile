pipeline {
    agent any

    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Build and Test") {
            steps {
                sh "yarn install"
                sh "yarn build"
                sh "yarn test"
            }
        }
        stage("Sonar Master Scan") {
            when {
                branch "master"
            }
            steps {
                sh "yarn sonar \
                    -Dsonar.host.url=${SONARQUBE_HOST} \
                    -Dsonar.login=${SONARQUBE_TOKEN}"
            }
        }
        stage("PR Sonar Scan and Coverage") {
            when {
                allOf {
                    not { branch "master" }
                    expression { env.CHANGE_ID != null }
                }
            }
            steps {
                sh "yarn sonar \
                    -Dsonar.host.url=${SONARQUBE_HOST} \
                    -Dsonar.login=${SONARQUBE_TOKEN} \
                    -Dsonar.analysis.mode=preview \
                    -Dsonar.github.repository=laboratoriobridge/bridge-react \
                    -Dsonar.github.pullRequest=${env.CHANGE_ID} \
                    -Dsonar.github.oauth=${GITHUB_SECRET}"

                step([$class: 'CompareCoverageAction', scmVars: [GIT_URL: env.GIT_URL]])
            }
        }
    }
}
