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
            when { branch "master" }
            steps {
                sh "yarn sonar \
                    -Dsonar.host.url=${SONARQUBE_HOST} \
                    -Dsonar.login=${SONARQUBE_TOKEN}"
            }
        }
        stage("Record Master Coverage") {
            when { branch "master" }
            steps {
                script { currentBuild.result = 'SUCCESS' }
                step([$class: 'MasterCoverageAction', scmVars: [GIT_URL: env.GIT_URL]])
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
                    -Dsonar.github.repository=laboratoriobridge/bold \
                    -Dsonar.github.pullRequest=${env.CHANGE_ID} \
                    -Dsonar.github.oauth=${GITHUB_SECRET}"

                script { currentBuild.result = 'SUCCESS' }
                step([$class: 'CompareCoverageAction', scmVars: [GIT_URL: env.GIT_URL]])
            }
        }
    }
}
